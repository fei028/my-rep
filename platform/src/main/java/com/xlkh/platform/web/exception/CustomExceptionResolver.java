package com.xlkh.platform.web.exception;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.shiro.authz.UnauthorizedException;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;
/**
 * 异常解析器
 * @author fei
 *
 */
public class CustomExceptionResolver implements HandlerExceptionResolver{

	@Override
	public ModelAndView resolveException(HttpServletRequest request, HttpServletResponse response, Object handler,
			Exception ex) {
		ex.printStackTrace();
		
		String message = null;
		CustomException customException = null;
		
		if(ex instanceof CustomException){
			customException = (CustomException) ex;
		}else{
			String _msg = "未知错误";
			if(ex instanceof UnauthorizedException){
				_msg = "您没有权限访问";
			}
			customException = new CustomException(_msg);
		}
		
		message = customException.getMessage();
		
		request.setAttribute("message", message);
		
		try {
			
			request.getRequestDispatcher("/error.jsp").forward(request, response);
		} catch (ServletException | IOException e) {
			e.printStackTrace();
		}
		return new ModelAndView();
	}

	
}
