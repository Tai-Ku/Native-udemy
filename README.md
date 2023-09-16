Dưới đây là giải thích về các thuộc tính bạn đã sử dụng trong component FlatList:

1. **onMomentumScrollBegin**: Đây là một hàm callback được gọi khi người dùng bắt đầu cuộn danh sách. Trong trường hợp của bạn, nó đặt `isLoading` thành `false`.

2. **keyExtractor**: Đây là một hàm được sử dụng để trích xuất một giá trị duy nhất cho mỗi item trong danh sách. Trong trường hợp của bạn, nó trả về `id` của mỗi item.

3. **onEndReachedThreshold**: Đây là khoảng cách từ cuối danh sách mà `onEndReached` sẽ được kích hoạt. Giá trị này là một tỷ lệ của chiều cao danh sách.

4. **onEndReached**: Đây là một hàm callback được gọi khi người dùng cuộn đến cuối danh sách. Trong trường hợp của bạn, nếu `isLoading` là `false`, nó sẽ fetch thêm dữ liệu và thêm vào danh sách hiện tại.

5. **data**: Đây là mảng dữ liệu được sử dụng để render danh sách.

6. **renderItem**: Đây là một hàm render cho mỗi item trong danh sách. Trong trường hợp của bạn, nó render một component `UserPost` với các prop tương ứng.

<Pressable>: Đây là một component cung cấp bởi React Native, cho phép bạn xử lý các sự kiện nhấn. Khi người dùng nhấn vào nó, bạn có thể thực hiện một hành động nào đó.
# Native-udemy
