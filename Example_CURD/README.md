# Sử dụng Fetch trong JavaScript

## Giới thiệu
Trong JavaScript, `fetch` là một API được sử dụng để gửi và nhận dữ liệu từ máy chủ. Nó cung cấp một cách đơn giản và mạnh mẽ để tương tác với các API từ phía máy chủ.

## Hướng dẫn cài đặt JSON Server
Để chạy ví dụ trong mã nguồn JavaScript, bạn có thể sử dụng JSON Server để tạo một API đơn giản. Để cài đặt JSON Server, bạn cần thực hiện các bước sau:

1. Cài đặt JSON Server qua npm:
    - Bước 1: Khởi tạo một thư mục git: `git init`
    - Bước 2: Cài đặt JSON Server: `npm install json-server`
    - Bước 3: Tạo một file JSON để chứa dữ liệu mẫu
    - Bước 4: Thêm `"start": "json-server --watch db.json"` vào phần `"scripts"` trong file `package.json`
    - Bước 5: Khởi động JSON Server: `npm start`

## Ví dụ Fetch
Dưới đây là một ví dụ đơn giản về cách sử dụng `fetch` để gửi một yêu cầu GET đến một API và xử lý kết quả trả về:

```javascript
fetch('http://localhost:3000/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });
