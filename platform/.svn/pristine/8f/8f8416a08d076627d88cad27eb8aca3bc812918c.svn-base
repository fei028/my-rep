package com.xlkh.platform.service.system;

import java.util.List;
import java.util.Map;
import java.util.Set;

import com.xlkh.platform.pojo.system.ActiveUser;
import com.xlkh.platform.pojo.system.SysFunction;
import com.xlkh.platform.pojo.system.SysUser;

/**
 * 认证授权服务接口
 * @author 鹏飞
 *
 */
public interface SysService {
	/**
	 * 根据用户名和密码进行用户身份认证
	 * @param userName 用户名
	 * @param userPassword 密码
	 * @return 认证成功返回认证用户对象，认证失败返回null
	 */
	public ActiveUser authenticat(String userName, String userPassword);
	/**
	 * 根据用户账号查询用户信息
	 * @param userName 用户账号
	 * @return 用户信息
	 */
	public SysUser findSysUserByUserName(String userName);
	/**
	 * 获取该认证用户有权限访问的菜单集合指定parentId可以查询父级或者子级菜单
	 * @param userId 认证用户主键id
	 * @return 属于该用户的菜单集合
	 */
	public List<SysFunction> getMenus(ActiveUser activeUser,Integer parentId);
	/**
	 * 获取该认证用户有权限访问的菜单集合
	 * @param userId 认证用户主键id
	 * @return 属于该用户的菜单集合
	 */
	public List<SysFunction> getMenus(Integer userId);
	/**
	 * 获取该认证用户有权限访问的权限集合
	 * @param userId 认证用户主键id
	 * @return 属于该用户的权限集合
	 */
	public List<SysFunction> getPermissionsByUserId(Integer userId);
	/**
	 * 获取认证用户的权限代码集合
	 * @param userId 认证用户id
	 * @return
	 */
	public Set<String> getPermissionCodesByUserId(Integer userId);
	/**
	 * 判断用户是否拥有该权限(功能代码为functionCode的权限)
	 * @param permissionMap 认证用户权限集合map
	 * @param functionCode 功能代码
	 * @return true:有权限 false:无权限
	 */
	public boolean hasPermission(Map<String,Integer> permissionMap, String functionCode);
	/**
	 * 给角色授权
	 * @param ids 权限id集合
	 * @param roleId 角色id
	 */
	public void authorize(Integer[] ids, Integer roleId);
}
