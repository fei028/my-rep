package com.xlkh.platform.controller.system;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.xlkh.platform.pojo.system.SysGroup;
import com.xlkh.platform.service.system.SysGroupService;
import com.xlkh.platform.web.annotation.PermissionChange;

/**
 * 
 * @author fei
 *
 */
@Controller
@RequestMapping(value = "/system/sysGroup")
public class SysGroupController {

	@Autowired
	private SysGroupService sysGroupService;
	
	@RequestMapping(value = "/sysGroupMain")
	public String sysUserMain(){
		return "system/sysGroup/sysGroupMain";
	}
	
	@RequestMapping(value = "/add")
	public String add(SysGroup sysGroup){
		sysGroupService.save(sysGroup);
		return null;
	}
	
	/**
	 * 删除一个用户组
	 * @param groupId
	 */
	@RequestMapping(value = "/deleteSysGroup")
	@PermissionChange
	public void deleteSysGroup(Integer groupId){
		sysGroupService.delByKey(groupId);
	}
	
	/**
	 * 批量删除用户组
	 * @param groupId
	 */
	@RequestMapping(value = "/deleteSysGroups")
	@PermissionChange
	public void deleteSysGroups(Integer[] groupIds){
		
		if(groupIds != null && groupIds.length > 0){
			sysGroupService.deleteSysGroups(groupIds);
		}
	}
	
	/**
	 * 修改用户组
	 * @param sysGroup
	 */
	@RequestMapping(value = "/modifySysGroup")
	public void modifySysGroup(SysGroup sysGroup){
		
		if(sysGroup != null && sysGroup.getGroupId() != null){
			sysGroupService.modifySysGroup(sysGroup);
		}
	}
}
