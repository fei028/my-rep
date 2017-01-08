package com.xlkh.platform.dao.system;

import java.util.List;

import com.xlkh.platform.pojo.system.SysUser;
import com.xlkh.platform.query.system.SysUserQuery;

/**
 * 
 * @author fei
 *
 */
public interface SysUserDao {

	/**
	 * 新增,pojo中属性为NULL值不插入对应数据库中字段
	 * @param sysUser
	 * @return
	 */
	public void insertSelective(SysUser sysUser);
	
	/**
	 * 通过主键删除
	 * @param 
	 */
	public void deleteByUserId(Integer userId);
	
	/**
	 * 批量删除
	 * @param UserIds 主键集合
	 */
	public void deleteByUserIds(Integer[] userIds);
	
	/**
	 * 更新,pojo中属性为NULL值不更新对应数据库中字段
	 * @param sysUser
	 */
	public void update(SysUser sysUser);
	
	/**
	 * 通过主键查询获取SysUser对象
	 * @param userId 主键id
	 * @return SysUser对象
	 */
	public SysUser selectByUserId(Integer userId);
	
	/**
	 * 通过主键集合查询获取SysUser对象集合
	 * @param userId 主键id
	 * @return SysUser对象集合
	 */
	public List<SysUser> selectByUserIds(List<Integer> userIds);
	
	/**
	 * 条件查询
	 * @param sysUserQuery
	 * @return 符合条件的结果集
	 */
	public List<SysUser> selectSysUsersWithCondition(SysUserQuery sysUserQuery);
	
	/**
	 * 条件查询,对应结果集记录总数
	 * @param sysUserQuery
	 * @return 记录总数
	 */
	public Long getCountWithCondition(SysUserQuery sysUserQuery);
	/**
	 * 通过用户帐号查询获取对应的用户信息
	 * @param userName 用户登录帐号
	 * @return
	 */
	public SysUser findSysUserBySysUserAccount(String userName);
	
}
