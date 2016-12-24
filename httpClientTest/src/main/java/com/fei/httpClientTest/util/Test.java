package com.fei.httpClientTest.util;

public class Test {

	public static int binarySearch(String[] strs, String str) {
		int start = 0;
		int len = strs.length;

		// 偶数长度
		if (strs.length % 2 == 0) {
			String string = strs[len - 1];
			if (string.equals(str)) {
				return len - 1;
			}
			len = len - 1;
		}
		int mid = (start + len) / 2;
		while (true) {
			System.out.println("start:" + start + "  end:" + len);
			if ((start - len) == 1 || start - len == -1) {
				return -1;
			}
			if (strs[mid].equals(str)) {
				return mid;
			} else if (strs[mid].charAt(0) > str.codePointAt(0)) {
				mid = (start + mid) / 2;
				len = mid;
			} else {
				mid = (len + mid) / 2;
				start = mid;
			}
		}

	}

	public static void main(String[] args) {
		String[] strs = new String[] { "a", "b", "c", "d", "e" };
		int binarySearch = binarySearch(strs, "t");
		System.out.println(binarySearch);
	}
}
