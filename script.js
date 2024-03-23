document.addEventListener('DOMContentLoaded', function () {
    const buyButtons = document.querySelectorAll('.buy-btn');
    const overlay = document.querySelector('.overlay');
    const closeButton = document.querySelector('.close-btn');

    buyButtons.forEach(button => {
        button.addEventListener('click', function () {
            overlay.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', function () {
        overlay.style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const buyButtons = document.querySelectorAll('.buy-btn');
    const overlay = document.querySelector('.overlay');
    const closeButton = document.querySelector('.close-btn');
    const registerButton = document.querySelector('.register-btn');
    const loginForm = document.querySelector('.login-form');
    const registerForm = document.querySelector('.register-form');

    buyButtons.forEach(button => {
        button.addEventListener('click', function () {
            overlay.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', function () {
        overlay.style.display = 'none';
    });

    let loginFormHidden = false;

    registerButton.addEventListener('click', function () {
        if (!loginFormHidden) {
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
            loginFormHidden = true;
        } else {
            registerForm.style.display = 'block';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var lienhe = document.getElementById('lienhe');
    var modal = document.getElementById('contact-modal');
    var closeBtn = document.getElementsByClassName('close')[0];
    
    lienhe.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        modal.style.display = 'block'; // Display the modal
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none'; // Close the modal when close button is clicked
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none'; // Close the modal when clicking outside of it
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var openSearch = document.getElementById('open-search');
    var searchModal = document.getElementById('search-modal');
    var closeBtn = document.querySelector('#search-modal .close');
    
    openSearch.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        searchModal.style.display = 'block'; // Hiển thị modal tìm kiếm
    });
    
    closeBtn.addEventListener('click', function() {
        searchModal.style.display = 'none'; // Ẩn modal tìm kiếm khi nút đóng được nhấp
    });

    window.addEventListener('click', function(event) {
        if (event.target === searchModal) {
            searchModal.style.display = 'none'; // Ẩn modal tìm kiếm khi nhấp vào bên ngoài nó
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var openCategory = document.getElementById('open-category');
    var categoryModal = document.getElementById('category-modal');
    var closeBtn = document.querySelector('#category-modal .close');
    var categoryTitle = document.getElementById('category-title');
    var categoryContent = document.getElementById('category-content');
    
    openCategory.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
        categoryModal.style.display = 'block'; // Hiển thị modal danh mục
    });
    
    closeBtn.addEventListener('click', function() {
        categoryModal.style.display = 'none'; // Ẩn modal danh mục khi nhấp vào nút đóng
    });

    window.addEventListener('click', function(event) {
        if (event.target === categoryModal) {
            categoryModal.style.display = 'none'; // Ẩn modal danh mục khi nhấp bên ngoài
        }
    });

    // Sự kiện khi nhấp vào một liên kết danh mục
    categoryContent.addEventListener('click', function(event) {
        var target = event.target;
        if (target.classList.contains('category-link')) {
            var content = target.getAttribute('data-content');
            categoryTitle.textContent = content; // Đặt tiêu đề modal thành nội dung của liên kết được nhấp vào
            // Hiển thị nội dung của liên kết
            // Ở đây, chúng ta có thể thực hiện bất kỳ hành động nào với nội dung, như hiển thị trong modal khác, hoặc thay đổi nội dung trang web chính.
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var openNewStories = document.getElementById('open-new-stories');
    var newStoriesModal = document.getElementById('new-stories-modal');
    var closeBtn = document.querySelector('#new-stories-modal .close');
    var newStoriesTitle = document.getElementById('new-stories-title');
    var newStoriesContent = document.getElementById('new-stories-content');
    
    openNewStories.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
        newStoriesModal.style.display = 'block'; // Hiển thị modal truyện mới

        // Thay đổi nội dung truyện mới
        newStoriesTitle.textContent = "Truyện Mới"; // Tiêu đề mặc định
        newStoriesContent.innerHTML = "<p>Baki, Berserk, Ippo</p>"; // Nội dung mặc định
    });
    
    closeBtn.addEventListener('click', function() {
        newStoriesModal.style.display = 'none'; // Ẩn modal truyện mới khi nhấp vào nút đóng
    });

    window.addEventListener('click', function(event) {
        if (event.target === newStoriesModal) {
            newStoriesModal.style.display = 'none'; // Ẩn modal truyện mới khi nhấp bên ngoài
        }
    });
});


