package com.xlkh.platform.service.system;

import java.util.List;

import com.xlkh.platform.pojo.system.SysRole;

public interface SysRoleService {
	/**
	 * 获取所有角色集合
	 * @param isAllField 是否查询所有字段(false时只查询roleId和roleName)
	 * @return
	 */
	List<SysRole> getSysRoles(boolean isAllField);
	/**
	 * 添加保存新角色
	 * @param sysRole
	 */
	void save(SysRole sysRole);
	/**
	 * 通过角色主键删除角色
	 * @param roleId 角色ID
	 */
	void delSysRoleByKey(Integer roleId);
	
	/**
	 * 批量删除
	 * @param roleIds
	 */
	void delSysRoles(Integer[] roleIds);
	
	/**
	 * 修改角色信息
	 * @param sysRole 
	 */
	void modifySysRoleInfo(SysRole sysRole);

}
