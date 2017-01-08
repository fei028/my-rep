package com.xlkh.platform.service.system;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.xlkh.platform.common.page.SimplePage;
import com.xlkh.platform.dao.system.SysUserDao;
import com.xlkh.platform.pojo.system.SysUser;
import com.xlkh.platform.query.system.SysUserQuery;

@Service
@Transactional(readOnly = true)
public class SysUserServiceImpl implements SysUserService{

	@Autowired
	private SysUserDao sysUserDao;

	@Override
	public List<SysUser> getSysUsers(Integer pageNo, String username,boolean isAllField) {
		SysUserQuery sysUserQuery = new SysUserQuery();
		if(!isAllField){
			// id 用户名 	姓名 	移动电话 	邮箱 	用户组 	用户状态
			String fields = "user_id,user_name,real_name,user_mobile,user_email,user_status";
			sysUserQuery.setFields(fields);
		}
		//sysUserQuery.setPageNo(pageNo);
		//sysUserQuery.setRealName(username);
		return  sysUserDao.selectSysUsersWithCondition(sysUserQuery);
	}

	@Transactional(readOnly = false)
	@Override
	public void saveSysUser(SysUser sysUser) {
		sysUserDao.insertSelective(sysUser);
	}

	@Override
	public SimplePage search(SysUserQuery searchSysUserInfo) {
		
		// if searchSysUserInfo 为null,则查询全部用户
		if(searchSysUserInfo == null){
			searchSysUserInfo = new SysUserQuery();
		}
		// 检查pageNo
		Integer pageNo = searchSysUserInfo.getPageNo();
		if(pageNo == null){
			searchSysUserInfo.setPageNo(pageNo);
		}
		// 检查pageSize
		Integer pageSize = searchSysUserInfo.getPageSize();
		if (pageSize == null) {
			// set方法中会对pageSize 设置为默认数值【if 传入的pageSize == null】
			searchSysUserInfo.setPageSize(pageSize);
		}
		
		// 名字模糊
		
		// 获取记录总数
		Long totalCount = sysUserDao.getCountWithCondition(searchSysUserInfo);
		// 当前页记录集合
		List<SysUser> list = sysUserDao.selectSysUsersWithCondition(searchSysUserInfo);

		SimplePage page = new SimplePage(searchSysUserInfo.getPageNo(), searchSysUserInfo.getPageSize(), totalCount);
		page.setList(list);
		return page;
	}

	@Transactional(readOnly = false)
	@Override
	public void modifySysUserInfo(SysUser sysUser) {
		sysUserDao.update(sysUser);
	}

	@Override
	public void deleteSysUsers(Integer[] userIds) {
		if(userIds.length == 1){
			// 通过主键删除
			sysUserDao.deleteByUserId(userIds[0]);
		}else{
			// 批量删除
			sysUserDao.deleteByUserIds(userIds);
		}
	}

}
