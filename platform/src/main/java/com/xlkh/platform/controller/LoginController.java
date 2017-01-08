package com.xlkh.platform.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.LockedAccountException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.xlkh.platform.common.web.ResponseUtils;
import com.xlkh.platform.pojo.system.ActiveUser;
import com.xlkh.platform.pojo.system.SysFunction;
import com.xlkh.platform.service.system.SysService;
import com.xlkh.platform.utils.ShiroUtils;
import com.xlkh.platform.web.Constant;

/**
 * 登录控制器
 * 
 * @author fei
 *
 */
@Controller
@RequestMapping(value = "/login")
public class LoginController {

	@Autowired
	private SysService sysService;
	/**
	 * 用户认证
	 * 
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping(value = "/login.do",method = RequestMethod.POST)
	public void login(String username,String password,HttpServletResponse response) throws IOException {
		System.out.println("进行登录");

		Subject subject = ShiroUtils.getSubject();

		AuthenticationToken token = new UsernamePasswordToken(username, password);
		String msg = "ok";
		try {
			subject.login(token);
		} catch (UnknownAccountException e) {
			msg = e.getMessage();
		} catch (IncorrectCredentialsException e) {
			msg = e.getMessage();
		} catch (LockedAccountException e) {
			msg = e.getMessage();
		} catch (AuthenticationException e) {
			msg = "用户验证失败";
		}

		// 获取认证用户
		@SuppressWarnings("unused")
		Session session = ShiroUtils.getSession();
		ActiveUser activeUser = (ActiveUser) ShiroUtils.getAuthenticatedUser();
		// 根据用户id取出菜单
		List<SysFunction> menus = sysService.getMenus(activeUser.getUserId());

		// 将用户菜单 设置到activeUser
		activeUser.setMenus(menus);

		ShiroUtils.setSessionAttribute(Constant.ACTIVEUSER_SESSION, activeUser);
		System.out.println("认证用户菜单设置完毕;");
		ResponseUtils.sendText(response, msg);
	}
}
