package com.xlkh.platform.web.aop;

import org.apache.shiro.cache.ehcache.EhCacheManager;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.xlkh.platform.web.annotation.PermissionChange;

/**
 * 缓存清理
 * 当权限与用户关系发生变化时
 * @author fei
 *
 */
@Aspect
@Component
public class CacheClearAspect {

	@Autowired
	private EhCacheManager cacheManager; // 清除Ehcache缓存,在授权信息变化后
	
	@After("@annotation(permissionChange)")
	public void doAfter(JoinPoint joinPoint,PermissionChange permissionChange){
		// 清除权限缓存
		cacheManager.getCacheManager().clearAll();
	}
}
