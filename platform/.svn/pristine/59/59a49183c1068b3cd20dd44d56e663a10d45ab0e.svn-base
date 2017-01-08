package com.xlkh.platform.controller.home;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.alibaba.fastjson.serializer.JSONSerializer;
import com.alibaba.fastjson.serializer.PropertyFilter;
import com.alibaba.fastjson.serializer.SerializeWriter;
import com.xlkh.platform.common.web.ResponseUtils;
import com.xlkh.platform.pojo.system.ActiveUser;
import com.xlkh.platform.pojo.system.SysFunction;
import com.xlkh.platform.service.system.SysService;
import com.xlkh.platform.web.Constant;

@Controller
@RequestMapping(value = "/home")
public class HomeController {
	@Autowired
	private SysService sysService;

	private static PropertyFilter filter = new PropertyFilter() {
		// 过滤不需要的字段
		@Override
		public boolean apply(Object object, String name, Object value) {
			if(name.equals("sysFunctions")){
				return false;
			}
			return true;
		}
	};
	
	@RequestMapping(value = "/home")
	public String home() {
		return "index";
	}

	@RequestMapping(value = "/manager.do")
	public String manager() {
		return "system/left";
	}

	@RequestMapping(value = "/getMenu.do")
	public void getMenu(Integer parentId, HttpServletRequest request, HttpServletResponse response) throws IOException {

		String json = "";
		ActiveUser activeUser = (ActiveUser) request.getSession().getAttribute(Constant.ACTIVEUSER_SESSION);
		if (activeUser != null) {
			List<SysFunction> menus = sysService.getMenus(activeUser, parentId);
			if (menus != null && menus.size() > 0) {
				// 转json 忽略sysFunctions属性
				SerializeWriter sw = new SerializeWriter();
				JSONSerializer serializer = new JSONSerializer(sw);
				serializer.getPropertyFilters().add(filter);
				serializer.write(menus);
				json = sw.toString();
			}
		}
		ResponseUtils.sendJson(response, json);
	}

	@RequestMapping(value = "/menu.do")
	public String menu(Integer pId, Model model) {
		model.addAttribute("pId", pId);
		return "home/menuFrame";
	}
}
