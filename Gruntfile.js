export default function (grunt) {
  grunt.initConfig({
    // Minification và Uglification cho JavaScript
    uglify: {
      options: {
        mangle: true,
        compress: true,
      },
      my_target: {
        files: {
          "dist/js/app.min.js": ["src/js/*.js"],
        },
      },
    },
    // Minification cho CSS
    cssmin: {
      target: {
        files: {
          "dist/css/style.min.css": ["src/css/*.css"],
        },
      },
    },
    // Nối các file JavaScript
    concat: {
      options: {
        separator: ";",
      },
      dist: {
        src: ["src/js/file1.js", "src/js/file2.js"],
        dest: "dist/js/bundle.js",
      },
    },
    // Nén hình ảnh
    imagemin: {
      dynamic: {
        files: [
          {
            expand: true,
            cwd: "src/images/",
            src: ["**/*.{png,jpg,gif}"],
            dest: "dist/images/",
          },
        ],
      },
    },
    // Nén các tệp tin khác
    compress: {
      main: {
        options: {
          archive: "dist/archive.zip",
        },
        files: [
          { src: ["src/other_files/*"], dest: "dist/", filter: "isFile" },
        ],
      },
    },
  });

  // Load các plugins
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-imagemin");
  grunt.loadNpmTasks("grunt-contrib-compress");

  // Đăng ký các task
  grunt.registerTask("default", [
    "uglify",
    "cssmin",
    "concat",
    "imagemin",
    "compress",
  ]);
}
