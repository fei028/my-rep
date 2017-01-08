package com.xlkh.platform.utils;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;

/**
 * Shiro工具类
 * @author fei
 *
 */
public class ShiroUtils {
	/**
	 * 获取Session
	 * @return
	 */
	public static Session getSession(){
		return SecurityUtils.getSubject().getSession();
	}
	
	/**
	 * 获取Subject
	 * @return
	 */
	public static Subject getSubject(){
		return SecurityUtils.getSubject();
	}
	
	/**
	 * 获取认证用户
	 * @return
	 */
	public static Object getAuthenticatedUser(){
		return SecurityUtils.getSubject().getPrincipal();
	}
	
	/**
	 * 往session中设置value
	 * @param key
	 * @param value
	 */
	public static void setSessionAttribute(Object key, Object value){
		getSession().setAttribute(key, value);
	}
	
	/**
	 * 从session中获取value 
	 * @param key
	 * @return
	 */
	public static Object getSessionAttribute(Object key){
		return getSession().getAttribute(key);
	}
}
