package com.xlkh.platform.web.customJspTag;

import java.io.IOException;
import java.util.Map;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;

public class ShowNameTag extends SimpleTagSupport{

	private Integer key;
	private Map<Integer, String> map;
	
	@Override
	public void doTag() throws JspException, IOException {
		
		String name = "";
		if(map != null && map.get(key) != null){
			name = map.get(key);
		}
		JspWriter out = getJspContext().getOut();
	    out.println(name);
	}
	
	public Integer getKey() {
		return key;
	}

	public Map<Integer, String> getMap() {
		return map;
	}

	public void setKey(Integer key) {
		this.key = key;
	}

	public void setMap(Map<Integer, String> map) {
		this.map = map;
	}
	
	
}
