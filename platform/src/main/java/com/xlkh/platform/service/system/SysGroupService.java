package com.xlkh.platform.service.system;

import com.xlkh.platform.pojo.system.SysGroup;

public interface SysGroupService {

	/**
	 * 新用户组保存
	 * @param sysRole
	 */
	void save(SysGroup sysGroup);
	
	/**
	 * 删除用户组通过主键
	 * @param groupId
	 */
	void delByKey(Integer groupId);
	
	/**
	 * 批量删除
	 * @param groupIds
	 */
	void deleteSysGroups(Integer[] groupIds);
	
	/**
	 * 修改用户组
	 * @param sysGroup
	 */
	void modifySysGroup(SysGroup sysGroup);
	

}
