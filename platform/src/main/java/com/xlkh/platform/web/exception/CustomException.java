package com.xlkh.platform.web.exception;
/**
 * 自定义异常
 * @author fei
 *
 */
public class CustomException extends Exception{

	/**
	 * 
	 */
	private static final long serialVersionUID = -6096752780431380221L;
	
	private String message;
	public CustomException(String message) {
		super(message);
		this.message = message;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	
}
