package com.xlkh.platform.query.system;

import java.util.Date;

import com.xlkh.platform.query.BaseQuery;
/**
 * 
 * @author fei
 *
 */
public class SysGroupQuery extends BaseQuery{
	
	/**        设置批量条件查询where条件  set属性 在sql语句里相当于在where条件中 属性对应字段 = 设置的属性值     **/
	
	/** 用户组ID */
	private Integer groupId;
	/** 用户组名 */
	private String groupName;
	/** 描述 */
	private String groupDesc;
	/** 备注 */
	private String groupRemark;
	/** 创建人 */
	private Integer createUser;
	/** 创建时间 */
	private Date createTime;
	/** 更新人 */
	private Integer updateUser;
	/** 更新时间 */
	private Date updateTime;
	
	public Integer getGroupId() {
		return groupId;
	}

	public SysGroupQuery setGroupId(Integer groupId) {
		this.groupId = groupId;
		return this;
	}
	public String getGroupName() {
		return groupName;
	}

	public SysGroupQuery setGroupName(String groupName) {
		this.groupName = groupName == null ? null : groupName.trim();
		return this;
	}
	public String getGroupDesc() {
		return groupDesc;
	}

	public SysGroupQuery setGroupDesc(String groupDesc) {
		this.groupDesc = groupDesc == null ? null : groupDesc.trim();
		return this;
	}
	public String getGroupRemark() {
		return groupRemark;
	}

	public SysGroupQuery setGroupRemark(String groupRemark) {
		this.groupRemark = groupRemark == null ? null : groupRemark.trim();
		return this;
	}
	public Integer getCreateUser() {
		return createUser;
	}

	public SysGroupQuery setCreateUser(Integer createUser) {
		this.createUser = createUser;
		return this;
	}
	public Date getCreateTime() {
		return createTime;
	}

	public SysGroupQuery setCreateTime(Date createTime) {
		this.createTime = createTime;
		return this;
	}
	public Integer getUpdateUser() {
		return updateUser;
	}

	public SysGroupQuery setUpdateUser(Integer updateUser) {
		this.updateUser = updateUser;
		return this;
	}
	public Date getUpdateTime() {
		return updateTime;
	}

	public SysGroupQuery setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
		return this;
	}
	/**        设置批量条件查询where条件  end       **/
	
	/**      设置排序字段 start                  **/
	/**
	 * 设置排序按属性：groupId
	 * 
	 * @param isAsc true升序，否则为降序
	 *            
	 */
	public SysGroupQuery orderbyGroupId(boolean isAsc) {
		orderByFields.add(new OrderField("group_id", isAsc ? OrderField.ORDER_ASC : OrderField.ORDER_DESC));
		return this;
	}
	/**
	 * 设置排序按属性：groupName
	 * 
	 * @param isAsc true升序，否则为降序
	 *            
	 */
	public SysGroupQuery orderbyGroupName(boolean isAsc) {
		orderByFields.add(new OrderField("group_name", isAsc ? OrderField.ORDER_ASC : OrderField.ORDER_DESC));
		return this;
	}
	/**
	 * 设置排序按属性：groupDesc
	 * 
	 * @param isAsc true升序，否则为降序
	 *            
	 */
	public SysGroupQuery orderbyGroupDesc(boolean isAsc) {
		orderByFields.add(new OrderField("group_desc", isAsc ? OrderField.ORDER_ASC : OrderField.ORDER_DESC));
		return this;
	}
	/**
	 * 设置排序按属性：groupRemark
	 * 
	 * @param isAsc true升序，否则为降序
	 *            
	 */
	public SysGroupQuery orderbyGroupRemark(boolean isAsc) {
		orderByFields.add(new OrderField("group_remark", isAsc ? OrderField.ORDER_ASC : OrderField.ORDER_DESC));
		return this;
	}
	/**
	 * 设置排序按属性：createUser
	 * 
	 * @param isAsc true升序，否则为降序
	 *            
	 */
	public SysGroupQuery orderbyCreateUser(boolean isAsc) {
		orderByFields.add(new OrderField("create_user", isAsc ? OrderField.ORDER_ASC : OrderField.ORDER_DESC));
		return this;
	}
	/**
	 * 设置排序按属性：createTime
	 * 
	 * @param isAsc true升序，否则为降序
	 *            
	 */
	public SysGroupQuery orderbyCreateTime(boolean isAsc) {
		orderByFields.add(new OrderField("create_time", isAsc ? OrderField.ORDER_ASC : OrderField.ORDER_DESC));
		return this;
	}
	/**
	 * 设置排序按属性：updateUser
	 * 
	 * @param isAsc true升序，否则为降序
	 *            
	 */
	public SysGroupQuery orderbyUpdateUser(boolean isAsc) {
		orderByFields.add(new OrderField("update_user", isAsc ? OrderField.ORDER_ASC : OrderField.ORDER_DESC));
		return this;
	}
	/**
	 * 设置排序按属性：updateTime
	 * 
	 * @param isAsc true升序，否则为降序
	 *            
	 */
	public SysGroupQuery orderbyUpdateTime(boolean isAsc) {
		orderByFields.add(new OrderField("update_time", isAsc ? OrderField.ORDER_ASC : OrderField.ORDER_DESC));
		return this;
	}
	/**      设置排序字段  end                   **/
}