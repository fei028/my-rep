package com.xlkh.platform.web.shiro;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

import org.apache.shiro.web.filter.authc.FormAuthenticationFilter;

public class CustomFormAuthencationFilter extends FormAuthenticationFilter{

	@Override
	protected boolean onAccessDenied(ServletRequest request, ServletResponse response) throws Exception {
		return super.onAccessDenied(request, response);
	}
}
