package com.xlkh.platform.service.system;

import java.util.List;

import com.xlkh.platform.common.page.SimplePage;
import com.xlkh.platform.pojo.system.SysUser;
import com.xlkh.platform.query.system.SysUserQuery;

public interface SysUserService {
	/**
	 * 获取用户集合
	 * @param username 用户姓名
	 * @param pageNo 页号
	 * @param isAllField true：查询所有字段 false：只查询页面列表上显示的字段
	 * @return
	 */
	List<SysUser> getSysUsers(Integer pageNo, String username, boolean isAllField);
	/**
	 * 新增用户保存
	 * @param sysUser
	 */
	void saveSysUser(SysUser sysUser);
	
	/**
	 * 查询符合条件的用户集合
	 * @param searchSysUserInfo 查询用户有关的查询信息
	 * @return 
	 */
	SimplePage search(SysUserQuery searchSysUserInfo);
	
	/**
	 * 修改用户信息
	 * @param sysUser
	 */
	void modifySysUserInfo(SysUser sysUser);
	
	/**
	 * 批量删除用户
	 * @param userIds 用户主键集合
	 */
	void deleteSysUsers(Integer[] userIds);

}
