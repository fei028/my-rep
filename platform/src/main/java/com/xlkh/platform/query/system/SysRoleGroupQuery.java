package com.xlkh.platform.query.system;

import java.util.Date;

import com.xlkh.platform.query.BaseQuery;
/**
 * 
 * @author fei
 *
 */
public class SysRoleGroupQuery extends BaseQuery{
	
	/**        设置批量条件查询where条件  set属性 在sql语句里相当于在where条件中 属性对应字段 = 设置的属性值     **/
	
	/** 关系ID */
	private Integer id;
	/** 角色ID */
	private Integer roleId;
	/** 用户组ID */
	private Integer groupId;
	/** 创建人 */
	private Integer createUser;
	/** 创建时间 */
	private Date createTime;
	/** 更新人 */
	private Integer updateUser;
	/** 更新时间 */
	private Date updateTime;
	
	public Integer getId() {
		return id;
	}

	public SysRoleGroupQuery setId(Integer id) {
		this.id = id;
		return this;
	}
	public Integer getRoleId() {
		return roleId;
	}

	public SysRoleGroupQuery setRoleId(Integer roleId) {
		this.roleId = roleId;
		return this;
	}
	public Integer getGroupId() {
		return groupId;
	}

	public SysRoleGroupQuery setGroupId(Integer groupId) {
		this.groupId = groupId;
		return this;
	}
	public Integer getCreateUser() {
		return createUser;
	}

	public SysRoleGroupQuery setCreateUser(Integer createUser) {
		this.createUser = createUser;
		return this;
	}
	public Date getCreateTime() {
		return createTime;
	}

	public SysRoleGroupQuery setCreateTime(Date createTime) {
		this.createTime = createTime;
		return this;
	}
	public Integer getUpdateUser() {
		return updateUser;
	}

	public SysRoleGroupQuery setUpdateUser(Integer updateUser) {
		this.updateUser = updateUser;
		return this;
	}
	public Date getUpdateTime() {
		return updateTime;
	}

	public SysRoleGroupQuery setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
		return this;
	}
	/**        设置批量条件查询where条件  end       **/
	
	/**      设置排序字段 start                  **/
	/**
	 * 设置排序按属性：id
	 * 
	 * @param isAsc true升序，否则为降序
	 *            
	 */
	public SysRoleGroupQuery orderbyId(boolean isAsc) {
		orderByFields.add(new OrderField("id", isAsc ? OrderField.ORDER_ASC : OrderField.ORDER_DESC));
		return this;
	}
	/**
	 * 设置排序按属性：roleId
	 * 
	 * @param isAsc true升序，否则为降序
	 *            
	 */
	public SysRoleGroupQuery orderbyRoleId(boolean isAsc) {
		orderByFields.add(new OrderField("role_id", isAsc ? OrderField.ORDER_ASC : OrderField.ORDER_DESC));
		return this;
	}
	/**
	 * 设置排序按属性：groupId
	 * 
	 * @param isAsc true升序，否则为降序
	 *            
	 */
	public SysRoleGroupQuery orderbyGroupId(boolean isAsc) {
		orderByFields.add(new OrderField("group_id", isAsc ? OrderField.ORDER_ASC : OrderField.ORDER_DESC));
		return this;
	}
	/**
	 * 设置排序按属性：createUser
	 * 
	 * @param isAsc true升序，否则为降序
	 *            
	 */
	public SysRoleGroupQuery orderbyCreateUser(boolean isAsc) {
		orderByFields.add(new OrderField("create_user", isAsc ? OrderField.ORDER_ASC : OrderField.ORDER_DESC));
		return this;
	}
	/**
	 * 设置排序按属性：createTime
	 * 
	 * @param isAsc true升序，否则为降序
	 *            
	 */
	public SysRoleGroupQuery orderbyCreateTime(boolean isAsc) {
		orderByFields.add(new OrderField("create_time", isAsc ? OrderField.ORDER_ASC : OrderField.ORDER_DESC));
		return this;
	}
	/**
	 * 设置排序按属性：updateUser
	 * 
	 * @param isAsc true升序，否则为降序
	 *            
	 */
	public SysRoleGroupQuery orderbyUpdateUser(boolean isAsc) {
		orderByFields.add(new OrderField("update_user", isAsc ? OrderField.ORDER_ASC : OrderField.ORDER_DESC));
		return this;
	}
	/**
	 * 设置排序按属性：updateTime
	 * 
	 * @param isAsc true升序，否则为降序
	 *            
	 */
	public SysRoleGroupQuery orderbyUpdateTime(boolean isAsc) {
		orderByFields.add(new OrderField("update_time", isAsc ? OrderField.ORDER_ASC : OrderField.ORDER_DESC));
		return this;
	}
	/**      设置排序字段  end                   **/
}