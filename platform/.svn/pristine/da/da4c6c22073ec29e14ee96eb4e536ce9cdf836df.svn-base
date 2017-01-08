<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:forEach items="${sysUsers }" var="sysUser" varStatus="sta">
	<tr id="${sysUser.userId }">
		<td class="text-center">
		    <input type="checkbox" name="checks"/>
		</td>
		<td class="text-center">${sta.index+1 }</td>
		<td class="text-center">${sysUser.userName }</td>
		<td class="text-center">${sysUser.realName }</td>
		<td class="text-center">${sysUser.userMobile }</td> 
		<td class="text-center">${sysUser.userEmail }</td>
		<td class="text-center">用户组</td>
		<td class="text-center">有效</td>
	</tr>
</c:forEach>

