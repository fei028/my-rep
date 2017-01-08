package com.xlkh.platform.dao.system;

import java.util.List;
import java.util.Set;

import com.xlkh.platform.pojo.system.SysFunction;
import com.xlkh.platform.pojo.system.Tree;
import com.xlkh.platform.query.system.SysFunctionQuery;

/**
 * 
 * @author fei
 *
 */
public interface SysFunctionDao {

	/**
	 * 新增,pojo中属性为NULL值不插入对应数据库中字段
	 * @param sysFunction
	 * @return
	 */
	public void insertSelective(SysFunction sysFunction);
	
	/**
	 * 通过主键删除
	 * @param 
	 */
	public void deleteByFunctionId(Integer functionId);
	
	/**
	 * 批量删除
	 * @param FunctionIds 主键集合
	 */
	public void deleteByFunctionIds(Integer[] functionIds);
	
	/**
	 * 更新,pojo中属性为NULL值不更新对应数据库中字段
	 * @param sysFunction
	 */
	public void update(SysFunction sysFunction);
	
	/**
	 * 通过主键查询获取SysFunction对象
	 * @param functionId 主键id
	 * @return SysFunction对象
	 */
	public SysFunction selectByFunctionId(Integer functionId);
	
	/**
	 * 通过主键集合查询获取SysFunction对象集合
	 * @param functionId 主键id
	 * @return SysFunction对象集合
	 */
	public List<SysFunction> selectByFunctionIds(List<Integer> functionIds);
	
	/**
	 * 条件查询
	 * @param sysFunctionQuery
	 * @return 符合条件的结果集
	 */
	public List<SysFunction> selectSysFunctionsWithCondition(SysFunctionQuery sysFunctionQuery);
	
	/**
	 * 条件查询,对应结果集记录总数
	 * @param sysFunctionQuery
	 * @return 记录总数
	 */
	public Long getCountWithCondition(SysFunctionQuery sysFunctionQuery);
	
	/**
	 * 获取用户id为userId的用户所拥有权限的id集合
	 * @param userId
	 * @return
	 */
	public List<Integer> selectFunctionIds(Integer userId);
	
	/**
	 * 获取树所有节点
	 * @return
	 */
	public List<Tree> getTreeNodes();
	
	/**
	 * 获取功能代码集合
	 * @param functionIds
	 * @return
	 */
	public Set<String> selectPermissionCodes(List<Integer> functionIds);
	
}
