package com.xlkh.platform.service.system;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.xlkh.platform.dao.system.SysFunctionDao;
import com.xlkh.platform.dao.system.SysRoleFunctionDao;
import com.xlkh.platform.dao.system.SysUserDao;
import com.xlkh.platform.pojo.system.ActiveUser;
import com.xlkh.platform.pojo.system.SysFunction;
import com.xlkh.platform.pojo.system.SysRoleFunction;
import com.xlkh.platform.pojo.system.SysUser;
import com.xlkh.platform.query.system.SysFunctionQuery;


@Service
@Transactional(readOnly = true)
public class SysServiceImpl implements SysService {

	@Autowired
	private SysUserDao sysUserDao;
	@Autowired
	private SysFunctionDao sysFunctionDao;
	@Autowired
	private SysRoleFunctionDao sysRoleFunctionDao;

	@Override
	public ActiveUser authenticat(String userName, String userPassword) {
		SysUser sysUser = findSysUserByUserName(userName);

		if (sysUser == null) {
			return null;
		}
		// 密码是否正确
		if (!sysUser.getUserPassword().equals(userPassword)) {
			return null;
		}
		// 密码正确，认证通过
		ActiveUser activeUser = new ActiveUser();
		activeUser.setUserName(sysUser.getUserName());
		activeUser.setUserId(sysUser.getUserId());
		activeUser.setRealName(sysUser.getRealName());
		return activeUser;
	}

	@Override
	public SysUser findSysUserByUserName(String userName) {
		SysUser sysUser = sysUserDao.findSysUserBySysUserAccount(userName);
		// 判断该帐号是否真实存在
		if (sysUser == null) {
			return null;
		}
		return sysUser;
	}
	@Override
	public List<SysFunction> getMenus(ActiveUser activeUser,Integer parentId) {
		List<SysFunction> menus = activeUser.getMenus();
		if(parentId != null && menus != null && menus.size() > 0){
			if(parentId.equals(0)){
				return menus;
			}
			for(SysFunction sysFunction:menus){
				if(sysFunction.getFunctionId().equals(parentId)){
					return sysFunction.getSysFunctions();
				}
			}
		}
		return null;
	}
	
	@Override
	public List<SysFunction> getMenus(Integer userId) {
		// 顶级菜单集合
		List<SysFunction> pMenus = new ArrayList<>();
		// 获取所有的菜单
		List<SysFunction> sysFunctions = this.getSysFunctionsByUserId(userId, SysFunction.FUNCTION_TYPE_MENU, null);
		// 将顶级菜单筛选出，并且设置子菜单
		if(sysFunctions != null && sysFunctions.size() > 0){
			for(SysFunction sysFunction:sysFunctions){
				if(sysFunction.getParentId().equals(0)){
					pMenus.add(sysFunction);
				}
				for(SysFunction _sysFunction:sysFunctions){
					if(_sysFunction.getParentId().equals(sysFunction.getFunctionId())){
						sysFunction.getSysFunctions().add(_sysFunction);
					}
				}
			}
		}
		return pMenus;
	}
	
	@Override
	public List<SysFunction> getPermissionsByUserId(Integer userId) {
		// 查询全部类型权限
		return this.getSysFunctionsByUserId(userId, SysFunction.FUNCTION_TYPE_ALL, null);
	}



	/**
	 * 获取权限集合
	 * @param userId 用户id(null值忽略不设置条件)
	 * @param functionType 权限类型(null值忽略不设置条件)
	 * @return 用户拥有的权限集合
	 */
	private List<SysFunction> getSysFunctionsByUserId(Integer userId, Integer functionType, Integer parentId) {
		// 获取用户拥有的权限id集合
		List<Integer> functionIds = sysFunctionDao.selectFunctionIds(userId);
		List<SysFunction> sysFunctions = null;
		if (functionIds != null && functionIds.size() > 0 && functionIds.get(0) != null) {
			SysFunctionQuery sysFunctionQuery = new SysFunctionQuery();
			// 设置查询权限的id集合
			sysFunctionQuery.setFunctionIds(functionIds);
			// 设置权限类型
			sysFunctionQuery.setFunctionType(functionType);
			// 
			sysFunctionQuery.setParentId(parentId);
			// 设置查询的字段
			sysFunctionQuery.setFields("function_id, function_name, parent_id, function_url");
			sysFunctions = sysFunctionDao.selectSysFunctionsWithCondition(sysFunctionQuery);
		}
		return sysFunctions;
	}

	@Transactional(readOnly = false,propagation = Propagation.REQUIRED)
	@Override
	public void authorize(Integer[] ids, Integer roleId) {
		// 当权限集合ids == null时，说明用户取消了该角色下已有的权限，且没有进行权限的添加，只进行删除原有权限即可
		// 将原先角色下权限全部删除
		if(roleId != null){
			sysRoleFunctionDao.deleteByRoleId(roleId);
			
			if(ids != null && ids.length > 0){
				// id去重
				Set<Integer> idSet = new HashSet<>(Arrays.asList(ids));
				List<SysRoleFunction> sysRoleFunctions = new ArrayList<>();
				SysRoleFunction sysRoleFunction = null;
				for(Integer functionId:idSet){
					sysRoleFunction = new SysRoleFunction();
					sysRoleFunction.setFunctionId(functionId);
					sysRoleFunction.setRoleId(roleId);
					sysRoleFunction.setCreateTime(new Date());
					sysRoleFunctions.add(sysRoleFunction);
				}
				sysRoleFunctionDao.insertSysRoleFunctions(sysRoleFunctions);
			}
			
		}
		
	}

	@Override
	public boolean hasPermission(Map<String, Integer> permissionMap, String functionCode) {
		if (permissionMap != null && permissionMap.size() > 0) {
			if (permissionMap.get(functionCode) != null) {
				return true;
			}
		}
		return false;
	}

	@Override
	public Set<String> getPermissionCodesByUserId(Integer userId) {
		if(userId != null){
			// 获取用户拥有的权限id集合
			List<Integer> functionIds = sysFunctionDao.selectFunctionIds(userId);
			if(functionIds != null && functionIds.size() > 0){
				// 权限code集合
				Set<String> permissionCodes = sysFunctionDao.selectPermissionCodes(functionIds);
				return permissionCodes;
			}
		}
		return null;
	}

	

}
