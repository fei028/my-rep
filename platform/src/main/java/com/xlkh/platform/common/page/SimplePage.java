package com.xlkh.platform.common.page;

import java.io.Serializable;
import java.util.List;

/**
 * 简单分页
 * @author fei
 *
 */
public class SimplePage implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -6627772695652783495L;
	
	public static final int DEF_PAGESIZE = 10;
	
	/**
	 * 页号
	 */
	private int pageNo;
	/**
	 * 每页数据条数
	 */
	private int pageSize = DEF_PAGESIZE;
	/**
	 * 总记录数
	 */
	private Long totalCount;
	/**
	 * 总页数
	 */
	private int totalPage;
	/**
	 * 当前页记录集合
	 */
	private List<?> list;
	
	public SimplePage(){
		
	}
	public SimplePage(int pageNo, int pageSize, Long totalCount) {
		super();
		
		setPageNo(pageNo);
		setPageSize(pageSize);
		setTotalCount(totalCount);
		
		checkPageNoOutOfRange(pageNo);
	}
	
	public SimplePage(int pageNo, int pageSize, Long totalCount, List<?> list) {
		super();
		
		setPageNo(pageNo);
		setPageSize(pageSize);
		setTotalCount(totalCount);
		
		this.list = list;
		
		checkPageNoOutOfRange(pageNo);
	}
	
	/**
	 * 检查页码是否越界,越界则将页码pageNo置为最大页码值
	 * @param pageNo 原始页码
	 */
	private void checkPageNoOutOfRange(int pageNo) {
		
		// 总页数,pageNo最大值为totalPage
		int tp = getTotalPage();
		// 越界时
		if(totalPage < pageNo){
			// pageNo置为最大页码值
			this.pageNo = tp;
		}
		
	}
	
	/**
	 * 检查页码,如果页码为null或者小于等于1,将页码置为1
	 * @param pageNo 原始页码
	 * @return 经过检查处理后的页码
	 */
	public static int checkPageNo(Integer pageNo){
		return (pageNo == null || pageNo < 1) ? 1 : pageNo;
	}
	/**
	 * 是否是第一页
	 * @return
	 */
	public boolean isFirstPage(){
		return pageNo <= 1;
	}
	
	/**
	 * 是否是最后一页
	 * @return
	 */
	public boolean isLastPage(){
		return pageNo >= getTotalCount();
	}
	/**
	 * 获取下一页页码
	 * @return
	 */
	public int getNextPage(){
		if(isLastPage()){
			return pageNo;
		}
		return pageNo + 1;
	}
	public int getPrePage(){
		if(isFirstPage()){
			return pageNo;
		}
		return pageNo - 1;
	}
	public int getPageNo() {
		return pageNo;
	}
	public int getPageSize() {
		return pageSize;
	}
	public double getTotalCount() {
		return totalCount;
	}
	public int getTotalPage() {
		totalPage = (int) (totalCount % pageSize == 0 ? totalCount / pageSize : totalCount / pageSize + 1);
		return totalPage;
	}
	public void setPageNo(int pageNo) {
		if(pageNo < 1){
			pageNo = 1;
		}
		this.pageNo = pageNo;
	}
	public void setPageSize(int pageSize) {
		if(pageSize < 1){
			pageSize = DEF_PAGESIZE;
		}
		this.pageSize = pageSize;
	}
	public void setTotalCount(Long totalCount) {
		this.totalCount = totalCount;
	}
	public void setTotalPage(Integer totalPage) {
		totalPage = (int) (totalCount % pageSize == 0 ? totalCount / pageSize : totalCount / pageSize + 1);
		this.totalPage = totalPage;
	}
	public List<?> getList() {
		return list;
	}
	public void setList(List<?> list) {
		this.list = list;
	}
	
}
