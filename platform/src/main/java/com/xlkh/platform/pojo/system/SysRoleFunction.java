package com.xlkh.platform.pojo.system;

import java.io.Serializable;
import java.util.Date;

/**
 * 系统_角色_功能
 * @author fei
 *
 */
public class SysRoleFunction implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = -2490430691411384074L;
	/** 关系ID */
	private Integer id;
	/** 角色ID */
	private Integer roleId;
	/** 功能ID */
	private Integer functionId;
	/** 创建人(id) */
	private Integer createUser;
	/** 创建时间 */
	private Date createTime;
	/** 更新人(id) */
	private Integer updateUser;
	/** 更新时间 */
	private Date updateTime;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getRoleId() {
		return roleId;
	}
	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}
	public Integer getFunctionId() {
		return functionId;
	}
	public void setFunctionId(Integer functionId) {
		this.functionId = functionId;
	}
	public Integer getCreateUser() {
		return createUser;
	}
	public void setCreateUser(Integer createUser) {
		this.createUser = createUser;
	}
	public Date getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
	public Integer getUpdateUser() {
		return updateUser;
	}
	public void setUpdateUser(Integer updateUser) {
		this.updateUser = updateUser;
	}
	public Date getUpdateTime() {
		return updateTime;
	}
	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}
	@Override
	public String toString() {
		return "SysRoleFunction [id=" + id + ", roleId=" + roleId + ", functionId=" + functionId + ", createUser="
				+ createUser + ", createTime=" + createTime + ", updateUser=" + updateUser + ", updateTime="
				+ updateTime + "]";
	}
	
}
