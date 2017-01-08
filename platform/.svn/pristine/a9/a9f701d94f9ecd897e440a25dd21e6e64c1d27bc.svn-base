package com.xlkh.platform.pojo.system;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class Tree implements Serializable{


	/**
	 * 
	 */
	private static final long serialVersionUID = 3556379253868035814L;
	private Integer id;
	private Integer pId;
	private String text;
	private String href;
	private String icon = "glyphicon glyphicon-leaf";
	
	private List<Tree> nodes = new ArrayList<>();
	
	public Tree() {
	}
	
	public Tree(Integer id, Integer pId, String text, String href) {
		super();
		this.id = id;
		this.pId = pId;
		this.text = text;
		this.href = href;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getpId() {
		return pId;
	}
	public void setpId(Integer pId) {
		this.pId = pId;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public List<Tree> getNodes() {
		return nodes;
	}
	public void setNodes(List<Tree> nodes) {
		this.nodes = nodes;
	}
	public String getHref() {
		return href;
	}
	public void setHref(String href) {
		this.href = href;
	}

	public String getIcon() {
		if(this.nodes.size() > 0){
			icon =  "glyphicon glyphicon-tree-deciduous";
		}
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}
	
}
