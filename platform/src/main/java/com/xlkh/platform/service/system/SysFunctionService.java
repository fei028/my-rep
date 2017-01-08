package com.xlkh.platform.service.system;

import java.util.List;
import java.util.Map;


import com.xlkh.platform.pojo.system.SysFunction;

public interface SysFunctionService {
	/**
	 * 获取全部权限信息
	 * @return
	 */
	List<SysFunction> getAllSysFunction(boolean isAllField);
	/**
	 * 获取权限集合(权限中只查询id和name)
	 * @return
	 */
	List<SysFunction> getAllSysFunctionIdAndName();
	/**
	 * 添加权限
	 * @param sysFunction
	 */
	void addSysFunction(SysFunction sysFunction);
	/**
	 * 判断用户新添加权限的功能代码是否已经存在
	 * @param functionCode
	 * @return true存在 false:不存在
	 */
	boolean isExistFunctionCode(String functionCode);
	/**
	 * 获取权限树数据
	 * @return
	 */
	String getTreeData();
	/**
	 * 获取所有的权限为菜单类型的权限集合，权限包含子权限集合
	 * @return
	 */
	List<SysFunction> getAllMenus();
	/**
	 * 获取某个角色下的权限角色集合
	 * @param roleId 角色id
	 * @return
	 */
	Map<Integer,Integer> getSysRoleFunctionMapByRoleId(Integer roleId);
	/**
	 * 批量删除权限
	 * @param functionIds
	 */
	void deleteByFunctionIds(Integer[] functionIds);
	/**
	 * 通过主键获取权限对象
	 * @param functionId 主键
	 * @return
	 */
	SysFunction getSysFunctionByKey(Integer functionId);
	/**
	 * 修改权限信息
	 * @param sysFunction
	 */
	void edit(SysFunction sysFunction);
	/**
	 * 验证functionName权限名称是否存在
	 * @param functionName
	 * @return
	 */
	boolean isExistFunctionName(String functionName);
	

}
