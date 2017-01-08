<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="check" uri="http://check.cc/jstl/tags" %>
<c:forEach items="${sysFunctions }" var="sysFunction">
	<tr>
		<td width="20%">
			<label> 
				 <input 
					id="p_${sysFunction.functionId }"
					pid="${sysFunction.parentId }"
					name="ids" type="checkbox" style="margin-left: 10px;"
					onclick="check(${sysFunction.functionId }, ${sysFunction.parentId },this.checked)"
					value="${sysFunction.functionId }"
					<check:show functionId="${sysFunction.functionId }">checked</check:show>
					/> ${sysFunction.functionName }
			</label>
		</td>
		<td width="80%" id="td_${sysFunction.functionId }">
			<c:forEach items="${sysFunction.sysFunctions }" var="child">
				<div style="float: left; width: 15%;">
					<label> 
						<input
							id="c_${child.functionId }"
							pid="${child.parentId }"
							name="ids" type="checkbox"
							onclick="check(${child.functionId },${sysFunction.functionId },this.checked)"
							value="${child.functionId }"
							<check:show functionId="${child.functionId }">checked</check:show>
							/> ${child.functionName }
					</label>
				</div>
			</c:forEach>
		</td>
	</tr>
</c:forEach>