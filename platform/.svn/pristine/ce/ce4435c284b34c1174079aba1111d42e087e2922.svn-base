package com.xlkh.platform.query.system;

import java.util.Date;
import java.util.List;

import com.xlkh.platform.query.BaseQuery;
/**
 * 
 * @author fei
 *
 */
public class SysFunctionQuery extends BaseQuery{
	
	/**        设置批量条件查询where条件  set属性 在sql语句里相当于在where条件中 属性对应字段 = 设置的属性值     **/
	
	/** 功能ID */
	private Integer functionId;
	/** 功能代码 */
	private String functionCode;
	/** 功能名称 */
	private String functionName;
	/** 父级功能ID */
	private Integer parentId;
	/** 功能描述 */
	private String functionDesc;
	/** 功能URL */
	private String functionUrl;
	/** 功能备注 */
	private String functionRemark;
	/** 功能类型 */
	private Integer functionType;
	/** 创建人 */
	private Integer createUser;
	/** 创建时间 */
	private Date createTime;
	/** 更新人 */
	private Integer updateUser;
	/** 更新时间 */
	private Date updateTime;
	
	/** 权限id集合 */
	private List<Integer> functionIds;

	
	public List<Integer> getFunctionIds() {
		return functionIds;
	}

	public void setFunctionIds(List<Integer> functionIds) {
		this.functionId = null;
		this.functionIds = functionIds;
	}
	
	public Integer getFunctionId() {
		return functionId;
	}

	public SysFunctionQuery setFunctionId(Integer functionId) {
		this.functionId = functionId;
		return this;
	}
	public String getFunctionCode() {
		return functionCode;
	}

	public SysFunctionQuery setFunctionCode(String functionCode) {
		this.functionCode = functionCode == null ? null : functionCode.trim();
		return this;
	}
	public String getFunctionName() {
		return functionName;
	}

	public SysFunctionQuery setFunctionName(String functionName) {
		this.functionName = functionName == null ? null : functionName.trim();
		return this;
	}
	public Integer getParentId() {
		return parentId;
	}

	public SysFunctionQuery setParentId(Integer parentId) {
		this.parentId = parentId;
		return this;
	}
	public String getFunctionDesc() {
		return functionDesc;
	}

	public SysFunctionQuery setFunctionDesc(String functionDesc) {
		this.functionDesc = functionDesc == null ? null : functionDesc.trim();
		return this;
	}
	public String getFunctionUrl() {
		return functionUrl;
	}

	public SysFunctionQuery setFunctionUrl(String functionUrl) {
		this.functionUrl = functionUrl == null ? null : functionUrl.trim();
		return this;
	}
	public String getFunctionRemark() {
		return functionRemark;
	}

	public SysFunctionQuery setFunctionRemark(String functionRemark) {
		this.functionRemark = functionRemark == null ? null : functionRemark.trim();
		return this;
	}
	public Integer getFunctionType() {
		return functionType;
	}

	public SysFunctionQuery setFunctionType(Integer functionType) {
		this.functionType = functionType;
		return this;
	}
	public Integer getCreateUser() {
		return createUser;
	}

	public SysFunctionQuery setCreateUser(Integer createUser) {
		this.createUser = createUser;
		return this;
	}
	public Date getCreateTime() {
		return createTime;
	}

	public SysFunctionQuery setCreateTime(Date createTime) {
		this.createTime = createTime;
		return this;
	}
	public Integer getUpdateUser() {
		return updateUser;
	}

	public SysFunctionQuery setUpdateUser(Integer updateUser) {
		this.updateUser = updateUser;
		return this;
	}
	public Date getUpdateTime() {
		return updateTime;
	}

	public SysFunctionQuery setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
		return this;
	}
	/**        设置批量条件查询where条件  end       **/
	
	/**      设置排序字段 start                  **/
	/**
	 * 设置排序按属性：functionId
	 * 
	 * @param isAsc true升序，否则为降序
	 *            
	 */
	public SysFunctionQuery orderbyFunctionId(boolean isAsc) {
		orderByFields.add(new OrderField("function_id", isAsc ? OrderField.ORDER_ASC : OrderField.ORDER_DESC));
		return this;
	}
	/**
	 * 设置排序按属性：functionCode
	 * 
	 * @param isAsc true升序，否则为降序
	 *            
	 */
	public SysFunctionQuery orderbyFunctionCode(boolean isAsc) {
		orderByFields.add(new OrderField("function_code", isAsc ? OrderField.ORDER_ASC : OrderField.ORDER_DESC));
		return this;
	}
	/**
	 * 设置排序按属性：functionName
	 * 
	 * @param isAsc true升序，否则为降序
	 *            
	 */
	public SysFunctionQuery orderbyFunctionName(boolean isAsc) {
		orderByFields.add(new OrderField("function_name", isAsc ? OrderField.ORDER_ASC : OrderField.ORDER_DESC));
		return this;
	}
	/**
	 * 设置排序按属性：parentId
	 * 
	 * @param isAsc true升序，否则为降序
	 *            
	 */
	public SysFunctionQuery orderbyParentId(boolean isAsc) {
		orderByFields.add(new OrderField("parent_id", isAsc ? OrderField.ORDER_ASC : OrderField.ORDER_DESC));
		return this;
	}
	/**
	 * 设置排序按属性：functionDesc
	 * 
	 * @param isAsc true升序，否则为降序
	 *            
	 */
	public SysFunctionQuery orderbyFunctionDesc(boolean isAsc) {
		orderByFields.add(new OrderField("function_desc", isAsc ? OrderField.ORDER_ASC : OrderField.ORDER_DESC));
		return this;
	}
	/**
	 * 设置排序按属性：functionUrl
	 * 
	 * @param isAsc true升序，否则为降序
	 *            
	 */
	public SysFunctionQuery orderbyFunctionUrl(boolean isAsc) {
		orderByFields.add(new OrderField("function_url", isAsc ? OrderField.ORDER_ASC : OrderField.ORDER_DESC));
		return this;
	}
	/**
	 * 设置排序按属性：functionRemark
	 * 
	 * @param isAsc true升序，否则为降序
	 *            
	 */
	public SysFunctionQuery orderbyFunctionRemark(boolean isAsc) {
		orderByFields.add(new OrderField("function_remark", isAsc ? OrderField.ORDER_ASC : OrderField.ORDER_DESC));
		return this;
	}
	/**
	 * 设置排序按属性：functionType
	 * 
	 * @param isAsc true升序，否则为降序
	 *            
	 */
	public SysFunctionQuery orderbyFunctionType(boolean isAsc) {
		orderByFields.add(new OrderField("function_type", isAsc ? OrderField.ORDER_ASC : OrderField.ORDER_DESC));
		return this;
	}
	/**
	 * 设置排序按属性：createUser
	 * 
	 * @param isAsc true升序，否则为降序
	 *            
	 */
	public SysFunctionQuery orderbyCreateUser(boolean isAsc) {
		orderByFields.add(new OrderField("create_user", isAsc ? OrderField.ORDER_ASC : OrderField.ORDER_DESC));
		return this;
	}
	/**
	 * 设置排序按属性：createTime
	 * 
	 * @param isAsc true升序，否则为降序
	 *            
	 */
	public SysFunctionQuery orderbyCreateTime(boolean isAsc) {
		orderByFields.add(new OrderField("create_time", isAsc ? OrderField.ORDER_ASC : OrderField.ORDER_DESC));
		return this;
	}
	/**
	 * 设置排序按属性：updateUser
	 * 
	 * @param isAsc true升序，否则为降序
	 *            
	 */
	public SysFunctionQuery orderbyUpdateUser(boolean isAsc) {
		orderByFields.add(new OrderField("update_user", isAsc ? OrderField.ORDER_ASC : OrderField.ORDER_DESC));
		return this;
	}
	/**
	 * 设置排序按属性：updateTime
	 * 
	 * @param isAsc true升序，否则为降序
	 *            
	 */
	public SysFunctionQuery orderbyUpdateTime(boolean isAsc) {
		orderByFields.add(new OrderField("update_time", isAsc ? OrderField.ORDER_ASC : OrderField.ORDER_DESC));
		return this;
	}
	/**      设置排序字段  end                   **/
}