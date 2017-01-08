package com.xlkh.platform.web.customJspTag;

import java.io.IOException;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.tagext.SimpleTagSupport;

import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;


public class CheckTag extends SimpleTagSupport{

	private Integer functionId;
	
	
	public Integer getFunctionId() {
		return functionId;
	}


	public void setFunctionId(Integer functionId) {
		// ExpressionEvaluatorManager.evaluate("functionId", Integer.class, this, pageContext);
		this.functionId = functionId;
	}

	@Override
	public void doTag() throws JspException, IOException {
		HttpServletRequest request = ((ServletRequestAttributes)RequestContextHolder.getRequestAttributes()).getRequest();
		@SuppressWarnings("unchecked")
		Map<Integer,Integer> sysRoleFunctionMap = (Map<Integer, Integer>) request.getAttribute("sysRoleFunctionMap");
		// 有该项权限
		if(hasPermission(functionId,sysRoleFunctionMap)){
			this.getJspBody().invoke(null);
		}
		
	}

	/**
	 * 某个角色下是否拥有某项权限
	 * @param functionId 权限id
	 * @param sysRoleFunctions 角色权限集合
	 * @return
	 */
	private boolean hasPermission(Integer functionId, Map<Integer,Integer> sysRoleFunctionMap) {
		if(functionId != null && sysRoleFunctionMap != null && sysRoleFunctionMap.size() > 0){
			if(sysRoleFunctionMap.get(functionId) != null){
				return true;
			}
		}
		return false;
	}
	
	
}
