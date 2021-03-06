package com.xlkh.platform.service.system;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.xlkh.platform.dao.system.SysGroupDao;
import com.xlkh.platform.dao.system.SysGroupUserDao;
import com.xlkh.platform.dao.system.SysRoleGroupDao;
import com.xlkh.platform.pojo.system.SysGroup;

@Service
@Transactional(readOnly = true)
public class SysGroupServiceImpl implements SysGroupService{

	@Autowired
	private SysGroupDao sysGroupDao;
	@Autowired
	private SysGroupUserDao sysGroupUserDao;
	@Autowired
	private SysRoleGroupDao sysRoleGroupDao;
	
	@Transactional(readOnly = false)
	@Override
	public void save(SysGroup sysGroup) {
		sysGroupDao.insertSelective(sysGroup);
	}

	@Transactional(readOnly = false, propagation = Propagation.REQUIRED)
	@Override
	public void delByKey(Integer groupId) {
		if(groupId != null){
			// 关联表数据删除
			sysGroupUserDao.deleteByGroupId(groupId);
			sysRoleGroupDao.deleteByGroupId(groupId);
			sysGroupDao.deleteByGroupId(groupId);
		}
	}

	@Transactional(readOnly = false)
	@Override
	public void modifySysGroup(SysGroup sysGroup) {
		sysGroupDao.update(sysGroup);
	}

	@Override
	public void deleteSysGroups(Integer[] groupIds) {
		
		// 中间表数据批量删除
		sysGroupUserDao.deleteByGroupIds(groupIds);
		sysRoleGroupDao.deleteByGroupIds(groupIds);
		sysGroupDao.deleteByGroupIds(groupIds);
	}

	
}
