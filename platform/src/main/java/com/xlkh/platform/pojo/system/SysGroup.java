package com.xlkh.platform.pojo.system;

import java.io.Serializable;
import java.util.Date;

/**
 * 系统用户组
 * @author fei
 *
 */
public class SysGroup implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = -8939166163855681985L;
	/** 用户组 */
	private Integer groupId;
	/** 用户组名 */
	private String groupName;
	/** 描述 */
	private String groupDesc;
	/** 备注 */
	private String groupRemark;
	/** 创建人 */
	private Integer createUser;
	/** 创建日期 */
	private Date createTime;
	/** 更新人 */
	private Integer updateUser;
	/** 更新时间 */
	private Date updateTime;
	
	public Integer getGroupId() {
        return groupId;
    }

    public void setGroupId(Integer groupId) {
        this.groupId = groupId;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName == null ? null : groupName.trim();
    }

    public String getGroupDesc() {
        return groupDesc;
    }

    public void setGroupDesc(String groupDesc) {
        this.groupDesc = groupDesc == null ? null : groupDesc.trim();
    }

    public String getGroupRemark() {
        return groupRemark;
    }

    public void setGroupRemark(String groupRemark) {
        this.groupRemark = groupRemark == null ? null : groupRemark.trim();
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
		return "SysGroup [groupId=" + groupId + ", groupName=" + groupName + ", groupDesc=" + groupDesc
				+ ", groupRemark=" + groupRemark + ", createUser=" + createUser + ", createTime=" + createTime
				+ ", updateUser=" + updateUser + ", updateTime=" + updateTime + "]";
	}
	
}
