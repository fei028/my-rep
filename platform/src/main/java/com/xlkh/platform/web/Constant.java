package com.xlkh.platform.web;

import java.util.HashMap;
import java.util.Map;

import com.xlkh.platform.pojo.system.SysFunction;

/**
 * 常量类
 * @author fei
 *
 */
public abstract class Constant {
	/** 认证用户session */
	public static final String ACTIVEUSER_SESSION="activeUser";
	
	/** 权限类型map */
	@SuppressWarnings("serial")
	public static final Map<Integer,String> FUNCTION_TYPE_MAP = new HashMap<Integer, String>(){
		{
			put(SysFunction.FUNCTION_TYPE_FUNC, "FUNC");
			put(SysFunction.FUNCTION_TYPE_BTN, "按钮");
			put(SysFunction.FUNCTION_TYPE_MENU, "菜单");
		}
	};
}
