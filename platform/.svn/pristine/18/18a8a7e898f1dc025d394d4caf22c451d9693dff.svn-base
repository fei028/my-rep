package com.xlkh.platform.common.web;


import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

/**
 * response发送数据，格式可以为json,xml,text
 * @author 鹏飞
 *
 */
public class ResponseUtils {

	/**
	 * response发送数据
	 * @param response
	 * @param contentType 数据格式
	 * @param data 数据
	 * @throws IOException
	 */
	public static void send(HttpServletResponse response,String contentType,String data) throws IOException{
		response.setContentType(contentType);
		response.getWriter().write(data);
		response.getWriter().close();
	}
	
	/**
	 * 发送json数据
	 * @param response
	 * @param data
	 * @throws IOException
	 */
	public static void sendJson(HttpServletResponse response,String data) throws IOException{
		
		String contentType="application/json;charset=UTF-8";
		send(response, contentType, data);
	}
	
	/**
	 * 发送xml数据
	 * @param response
	 * @param data
	 * @throws IOException
	 */
	public static void sendXml(HttpServletResponse response,String data) throws IOException{
		
		String contentType="text/xml;charset=UTF-8";
		send(response, contentType, data);
	}
	
	/**
	 * 发送文本数据
	 * @param response
	 * @param data
	 * @throws IOException
	 */
	public static void sendText(HttpServletResponse response,String data) throws IOException{
		
		String contentType="text/plain;charset=UTF-8";
		send(response, contentType, data);
	}
}
