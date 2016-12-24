package com.fei.httpClientTest.util;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;

public class HttpClientUtil {
	/**
	 * get请求
	 * @param url 请求地址
	 * @param param K:参数名 V:参数值
	 * @return 
	 */
	public static String doGet(String url,Map<String,String> param){
		
		// 创建HttpClient对象
		CloseableHttpClient httpClient = HttpClients.createDefault();
		
		String resultString = "";
		CloseableHttpResponse response = null;
		
		// 创建uri
		try {
			URIBuilder uriBuilder = new URIBuilder(url);
			
			if(param != null && param.size() > 0){
				for (String key : param.keySet()) {
					uriBuilder.addParameter(key, param.get(key));
				}
			}
			URI uri = uriBuilder.build();
			
			// 创建HttpGet请求
			HttpGet httpGet = new HttpGet(uri);
			// 执行请求
			response = httpClient.execute(httpGet);
			// 判断返回状态是否为200
			if(response.getStatusLine().getStatusCode() == 200){
				resultString = EntityUtils.toString(response.getEntity(), "UTF-8");
			}
		} catch (URISyntaxException e) {
			e.printStackTrace();
		} catch (ClientProtocolException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}finally {
			if(response != null){
				try {
					response.close();
					httpClient.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		
		return resultString;
	}
	/**
	 * get 请求 不携带参数
	 * @param url
	 * @return
	 */
	public static String doGet(String url){
		return doGet(url, null);
	}
	
	public static String doPost(String url,Map<String,String> param){
		// 创建HttpClient对象
		CloseableHttpClient httpClient = HttpClients.createDefault();
		
		CloseableHttpResponse response = null;
		String resultString = "";
		
		try {
			// 创建POST请求
			HttpPost httpPost = new HttpPost(url);
			if(param != null && param.size() > 0){
				List<NameValuePair> paramList = new ArrayList<>();
				for(String key:param.keySet()){
					paramList.add(new BasicNameValuePair(key, param.get(key)));
				}
				// 模拟表单
				UrlEncodedFormEntity entity = new UrlEncodedFormEntity(paramList);
				httpPost.setEntity(entity);
			}
			response = httpClient.execute(httpPost);
			resultString = EntityUtils.toString(response.getEntity(), "UTF-8");
		} catch (ClientProtocolException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}finally {
			if(response != null){
				try {
					response.close();
					httpClient.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		return resultString;
	}
	
	public static String doPost(String url){
		return doPost(url, null);
	}
	
	public static String doPostJson(String url,String json){
		// 创建HttpClient对象
		CloseableHttpClient httpClient = HttpClients.createDefault();
		CloseableHttpResponse response = null;
		String resultString = "";
		
		try {
			// 创建Http post请求
			HttpPost httpPost = new HttpPost(url);
			// 创建请求内容
			StringEntity entity = new StringEntity(json, ContentType.APPLICATION_JSON);
			httpPost.setEntity(entity);
			
			response = httpClient.execute(httpPost);
			resultString = EntityUtils.toString(response.getEntity(), "UTF-8");
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			if(response != null){
				try {
					response.close();
					httpClient.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
				
			}
		}
		return resultString;
	}
	
}
