package com.xlkh.platform.dao.system;

import java.util.List;

import com.xlkh.platform.pojo.system.SysGroup;
import com.xlkh.platform.query.system.SysGroupQuery;

/**
 * 
 * @author fei
 *
 */
public interface SysGroupDao {

	/**
	 * 新增,pojo中属性为NULL值不插入对应数据库中字段
	 * @param sysGroup
	 * @return
	 */
	public void insertSelective(SysGroup sysGroup);
	
	/**
	 * 通过主键删除
	 * @param 
	 */
	public void deleteByGroupId(Integer groupId);
	
	/**
	 * 批量删除
	 * @param GroupIds 主键集合
	 */
	public void deleteByGroupIds(Integer[] groupIds);
	
	/**
	 * 更新,pojo中属性为NULL值不更新对应数据库中字段
	 * @param sysGroup
	 */
	public void update(SysGroup sysGroup);
	
	/**
	 * 通过主键查询获取SysGroup对象
	 * @param groupId 主键id
	 * @return SysGroup对象
	 */
	public SysGroup selectByGroupId(Integer groupId);
	
	/**
	 * 通过主键集合查询获取SysGroup对象集合
	 * @param groupId 主键id
	 * @return SysGroup对象集合
	 */
	public List<SysGroup> selectByGroupIds(List<Integer> groupIds);
	
	/**
	 * 条件查询
	 * @param sysGroupQuery
	 * @return 符合条件的结果集
	 */
	public List<SysGroup> selectSysGroupsWithCondition(SysGroupQuery sysGroupQuery);
	
	/**
	 * 条件查询,对应结果集记录总数
	 * @param sysGroupQuery
	 * @return 记录总数
	 */
	public Long getCountWithCondition(SysGroupQuery sysGroupQuery);
	
}
