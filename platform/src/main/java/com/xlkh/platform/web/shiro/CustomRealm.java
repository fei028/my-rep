package com.xlkh.platform.web.shiro;

import java.util.List;
import java.util.Set;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.LockedAccountException;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;

import com.xlkh.platform.pojo.system.ActiveUser;
import com.xlkh.platform.pojo.system.SysFunction;
import com.xlkh.platform.pojo.system.SysUser;
import com.xlkh.platform.service.system.SysService;
import com.xlkh.platform.web.Constant;

public class CustomRealm extends AuthorizingRealm {

	@Autowired
	private SysService sysService;

	@Override
	public void setName(String name) {
		super.setName("customRealm");
	}

	/**
	 * 权限
	 */
	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
		ActiveUser activeUser = (ActiveUser) principals.getPrimaryPrincipal();
		// 根据认证用户id查询该认证用户拥有的权限
		SimpleAuthorizationInfo simpleAuthorizationInfo = new SimpleAuthorizationInfo();
		Set<String> permissions = sysService.getPermissionCodesByUserId(activeUser.getUserId());
		simpleAuthorizationInfo.addStringPermissions(permissions);
		return simpleAuthorizationInfo;
	}

	/**
	 * 认证
	 */
	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {

		// token是用户输入的用户名和密码
		// 1.从token中取出用户名
		String userName = (String) token.getPrincipal();

		// 2.根据用户输入的userName从数据库查询
		SysUser sysUser = sysService.findSysUserByUserName(userName);

		// 如果查询不到返回null
		if (sysUser == null) {//
			throw new UnknownAccountException("帐号或者密码有误");
		}
		// 帐号被锁定时
		if ("".equals(sysUser.getUserStatus())) {
			throw new LockedAccountException("您的帐号被锁定，请先联系管理员解锁");
		}

		// 从数据库查询到密码
		String password = sysUser.getUserPassword();

		// 如果查询到返回认证信息AuthenticationInfo

		// activeUser就是用户身份信息
		ActiveUser activeUser = new ActiveUser();
		activeUser.setUserId(sysUser.getUserId());
		activeUser.setUserName(userName);
		activeUser.setRealName(sysUser.getRealName());

		// 将activeUser设置simpleAuthenticationInfo
		SimpleAuthenticationInfo simpleAuthenticationInfo = new SimpleAuthenticationInfo(activeUser, password,
				this.getName());

		return simpleAuthenticationInfo;
	}

	// 清除缓存
	public void clearCached() {
		PrincipalCollection principals = SecurityUtils.getSubject().getPrincipals();
		super.clearCache(principals);
	}

}
