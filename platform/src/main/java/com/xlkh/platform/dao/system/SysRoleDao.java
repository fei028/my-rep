package com.xlkh.platform.dao.system;

import java.util.List;

import com.xlkh.platform.pojo.system.SysRole;
import com.xlkh.platform.query.system.SysRoleQuery;

/**
 * 
 * @author fei
 *
 */
public interface SysRoleDao {

	/**
	 * 新增,pojo中属性为NULL值不插入对应数据库中字段
	 * @param sysRole
	 * @return
	 */
	public void insertSelective(SysRole sysRole);
	
	/**
	 * 通过主键删除
	 * @param 
	 */
	public void deleteByRoleId(Integer roleId);
	
	/**
	 * 批量删除
	 * @param RoleIds 主键集合
	 */
	public void deleteByRoleIds(Integer[] roleIds);
	
	/**
	 * 更新,pojo中属性为NULL值不更新对应数据库中字段
	 * @param sysRole
	 */
	public void update(SysRole sysRole);
	
	/**
	 * 通过主键查询获取SysRole对象
	 * @param roleId 主键id
	 * @return SysRole对象
	 */
	public SysRole selectByRoleId(Integer roleId);
	
	/**
	 * 通过主键集合查询获取SysRole对象集合
	 * @param roleId 主键id
	 * @return SysRole对象集合
	 */
	public List<SysRole> selectByRoleIds(List<Integer> roleIds);
	
	/**
	 * 条件查询
	 * @param sysRoleQuery
	 * @return 符合条件的结果集
	 */
	public List<SysRole> selectSysRolesWithCondition(SysRoleQuery sysRoleQuery);
	
	/**
	 * 条件查询,对应结果集记录总数
	 * @param sysRoleQuery
	 * @return 记录总数
	 */
	public Long getCountWithCondition(SysRoleQuery sysRoleQuery);
	
}
