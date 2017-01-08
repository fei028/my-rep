package com.xlkh.platform.controller.system;

import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.shiro.crypto.hash.SimpleHash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.xlkh.platform.common.page.SimplePage;
import com.xlkh.platform.pojo.system.ActiveUser;
import com.xlkh.platform.pojo.system.SysUser;
import com.xlkh.platform.query.system.SysUserQuery;
import com.xlkh.platform.service.system.SysUserService;
import com.xlkh.platform.web.Constant;

/**
 * 
 * @author fei
 *
 */
@Controller
@RequestMapping(value = "/system/sysUser/")
public class SysUserController {

	@Autowired
	private SysUserService sysUserService;
	/**
	 * 用户管理主页
	 * @return
	 */
	@RequestMapping(value = "/index")
	public String index(Integer pageNo, String username, Model model){
		List<SysUser> sysUsers = sysUserService.getSysUsers(pageNo, username,false);
		model.addAttribute("sysUsers", sysUsers);
		return "system/sysUser/list";
	}
	/**
	 * 返回用户列表页
	 * @param pageNo 页号
	 * @param username 查询的用户名
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/list")
	public String list(Integer pageNo, String username, Model model){
		List<SysUser> sysUsers = sysUserService.getSysUsers(pageNo, username,false);
		model.addAttribute("sysUsers", sysUsers);
		return "system/sysUser/list";
	}
	
	/**
	 * 修改用户信息
	 * @param sysUser 修改信息后还未完成更新操作的用户
	 */
	@RequestMapping(value = "/modifSysUserInfo", method = RequestMethod.POST)
	public void modifySysUserInfo(SysUser sysUser){
		
		if(sysUser != null && sysUser.getUserId() != null){
			sysUserService.modifySysUserInfo(sysUser);
		}
	}
	/**
	 * 添加新用户
	 * @param sysUser 新用户
	 * @param session 当前登录用户session
	 * @return 
	 */
	@RequestMapping(value = "/addSysUser",method = RequestMethod.POST)
	public String addSysUser(SysUser sysUser,HttpSession session){
		System.out.println(sysUser);
		// 新用户默认密码 123
		SimpleHash simpleHash = new SimpleHash("md5","123");
		String password_md5 = simpleHash.toString();
		sysUser.setUserPassword(password_md5);
		// 添加时间
		sysUser.setCreateTime(new Date());
		// 添加人
		ActiveUser activeUser = (ActiveUser) session.getAttribute(Constant.ACTIVEUSER_SESSION);
		sysUser.setCreateUser(activeUser.getUserId());
		
		sysUserService.saveSysUser(sysUser);
		return "system/sysUser/sysUser_main";
	}
	
	/**
	 * 单个删除
	 */
	@RequestMapping(value = "/deleteSysUser")
	public void deleteSysUser(Integer userId){
		if(userId != null){
			this.deleteSysUsers(new Integer[]{userId});
		}
	}
	
	/**
	 * 批量删除
	 * @param userIds
	 */
	@RequestMapping(value = "/deleteSysUsers")
	public void deleteSysUsers(Integer[] userIds){
		if(userIds != null && userIds.length > 0){
			sysUserService.deleteSysUsers(userIds);
		}
	}
	
	/**
	 * 查询符合条件的用户集合
	 * @param searchSysUserInfo 查询用户有关的查询信息
	 * @return 
	 */
	@RequestMapping(value = "/search")
	public SimplePage search(SysUserQuery searchSysUserInfo){
		SimplePage page = sysUserService.search(searchSysUserInfo);
		return page;
	}
	
	
}
