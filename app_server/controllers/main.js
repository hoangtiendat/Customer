const homelist = (req, res) => {
  res.render('index', { title: 'Trang chủ' });
};

const courseslist = (req, res) => {
  res.render('courses', { title: 'Sản phẩm' });
};

const blog = (req, res) => {
  res.render('courses', { title: 'Tin tức' });
};

const contact = (req, res) => {
  res.render('contact', { title: 'Liên hệ' });
};

const single_course = (req, res) => {
  res.render('single-course', { title: 'Chi tiết sản phẩm' });
};

const sign_in = (req, res) => {
  res.render('sign-in', { title: 'Đăng nhập' });
};

const edit_profile = (req, res) => {
  res.render('edit-profile', { title: 'Thay đổi thông tin' });
};
const cart = (req, res) => {
  res.render('cart', { title: 'Giỏ hàng' });
};
const payment = (req, res) => {
  res.render('payment', { title: 'Thanh toán' });
};

module.exports = {
	homelist,
	courseslist,
	blog,
	contact,
	single_course,
	sign_in,
	edit_profile,
	cart,
	payment
}
