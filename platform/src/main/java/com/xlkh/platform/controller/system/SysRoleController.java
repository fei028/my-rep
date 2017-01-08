package com.xlkh.platform.controller.system;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.xlkh.platform.pojo.system.SysRole;
import com.xlkh.platform.service.system.SysRoleService;
import com.xlkh.platform.web.annotation.PermissionChange;
/**
 * 角色控制器
 * @author fei
 *
 */
@Controller
@RequestMapping(value="/system/sysRole")
public class SysRoleController {
	
	@Autowired
	private SysRoleService sysRoleService;
	/**
	 * 角色管理主页
	 * @return
	 */
	@RequestMapping(value="/sysRoleMain")
	public String sysRoleMain(){
		return "system/sysRole/sysRoleMain";
	}
	/**
	 * 添加角色
	 * @param sysRole
	 */
	@RequestMapping(value = "/add")
	public void add(SysRole sysRole){
		sysRoleService.save(sysRole);
	}
	
	/**
	 * 删除角色
	 * @param roleId
	 */
	@RequestMapping(value = "/del")
	@PermissionChange
	public void del(Integer roleId){
		sysRoleService.delSysRoleByKey(roleId);
	}
	
	/**
	 * 批量删除
	 * @param roleIds
	 */
	@RequestMapping(value = "/delSysRoles")
	@PermissionChange
	public void delSysRoles(Integer[] roleIds){
		
		if(roleIds != null && roleIds.length > 0){
			sysRoleService.delSysRoles(roleIds);
		}
	}
	
	/**
	 * 修改角色信息
	 * @param sysRole
	 */
	@RequestMapping(value = "/modifySysRoleInfo")
	public void modifySysRoleInfo(SysRole sysRole){
		
		if(sysRole != null && sysRole.getRoleId() != null){
			sysRoleService.modifySysRoleInfo(sysRole);
		}
	}
	
	@RequestMapping(value = "/list")
	public String list(){
		// sysRoleService.get
		return "system/sysRole/list";
	}
}
