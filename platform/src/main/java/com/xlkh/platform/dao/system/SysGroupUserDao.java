package com.xlkh.platform.dao.system;

import java.util.List;

import com.xlkh.platform.pojo.system.SysGroupUser;
import com.xlkh.platform.query.system.SysGroupUserQuery;

/**
 * 
 * @author fei
 *
 */
public interface SysGroupUserDao {

	/**
	 * 新增,pojo中属性为NULL值不插入对应数据库中字段
	 * @param sysGroupUser
	 * @return
	 */
	public void insertSelective(SysGroupUser sysGroupUser);
	
	/**
	 * 通过主键删除
	 * @param 
	 */
	public void deleteById(Integer id);
	
	/**
	 * 批量删除
	 * @param Ids 主键集合
	 */
	public void deleteByIds(Integer[] ids);
	
	/**
	 * 更新,pojo中属性为NULL值不更新对应数据库中字段
	 * @param sysGroupUser
	 */
	public void update(SysGroupUser sysGroupUser);
	
	/**
	 * 通过主键查询获取SysGroupUser对象
	 * @param id 主键id
	 * @return SysGroupUser对象
	 */
	public SysGroupUser selectById(Integer id);
	
	/**
	 * 通过主键集合查询获取SysGroupUser对象集合
	 * @param id 主键id
	 * @return SysGroupUser对象集合
	 */
	public List<SysGroupUser> selectByIds(List<Integer> ids);
	
	/**
	 * 条件查询
	 * @param sysGroupUserQuery
	 * @return 符合条件的结果集
	 */
	public List<SysGroupUser> selectSysGroupUsersWithCondition(SysGroupUserQuery sysGroupUserQuery);
	
	/**
	 * 条件查询,对应结果集记录总数
	 * @param sysGroupUserQuery
	 * @return 记录总数
	 */
	public Long getCountWithCondition(SysGroupUserQuery sysGroupUserQuery);
	
	/**
	 * 通过用户组id删除
	 * @param groupId
	 */
	public void deleteByGroupId(Integer groupId);

	/**
	 * 通过GroupId进行批量删除
	 * @param groupIds
	 */
	public void deleteByGroupIds(Integer[] groupIds);
	
}
