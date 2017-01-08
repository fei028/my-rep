package com.xlkh.platform.pojo.system;

import java.io.Serializable;
import java.util.Date;


/**
 * 系统角色
 * @author fei
 *
 */
public class SysRole implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = -7698070652226177185L;
	/** 角色ID */
	private Integer roleId;
	/** 角色名称 */
	private String roleName;
	/** 角色描述 */
	private String roleDesc; 
	/** 角色备注 */
	private String roleRemark; 
	/** 创建人(id) */
	private Integer createUser; 
	/** 创建时间 */
	private Date createTime;
	/** 更新人(id) */
	private Integer updateUser;
	/** 更新时间 */
	private Date updateTime;
	
	public Integer getRoleId() {
		return roleId;
	}

	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName == null ? null : roleName.trim();
	}

	public String getRoleDesc() {
		return roleDesc;
	}

	public void setRoleDesc(String roleDesc) {
		this.roleDesc = roleDesc == null ? null : roleDesc.trim();
	}

	public String getRoleRemark() {
		return roleRemark;
	}

	public void setRoleRemark(String roleRemark) {
		this.roleRemark = roleRemark == null ? null : roleRemark.trim();
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
		return "SysRole [roleId=" + roleId + ", roleName=" + roleName + ", roleDesc=" + roleDesc + ", roleRemark="
				+ roleRemark + ", createUser=" + createUser + ", createTime=" + createTime + ", updateUser="
				+ updateUser + ", updateTime=" + updateTime + "]";
	}
	
	
}
