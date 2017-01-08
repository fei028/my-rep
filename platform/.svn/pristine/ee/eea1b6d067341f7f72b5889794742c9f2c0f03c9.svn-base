package com.xlkh.platform.pojo.system;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;



/**
 * 认证用户有效信息
 * @author fei
 *
 */
public class ActiveUser implements Serializable{

	
	/**
	 * 
	 */
	private static final long serialVersionUID = -6769918669163310693L;
	/** 用户ID */
	private Integer userId;
	/** 用户名(登录账号) */
	private String userName;
	/** 用户姓名 */
	private String realName;
	/** 菜单集合 */
	private List<SysFunction> menus=new ArrayList<>();
	///** 认证用户权限集合 */
	/*private Set<SysFunction> permissions=new HashSet<SysFunction>();*/
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getRealName() {
		return realName;
	}
	public void setRealName(String realName) {
		this.realName = realName;
	}
	public List<SysFunction> getMenus() {
		return menus;
	}
	public void setMenus(List<SysFunction> menus) {
		this.menus = menus;
	}
	@Override
	public String toString() {
		return "ActiveUser [userId=" + userId + ", userName=" + userName + ", realName=" + realName + ", menus=" + menus
				+ "]";
	}
}
