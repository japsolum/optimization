module.exports = function(grunt){
	//config
grunt.initConfig({
  	imagemin: {
		jpg: {
      		options: {
        		progressive: true
        		optimizationLevel: 3
      		},
      		files: [
        		{
         			// Set to true to enable the following options…
          			expand: true,
          			// cwd is 'current working directory'
          			cwd: '/Project-Part-1-Start/images_src',
          			src: ['/*.jpg'],
          			// Could also match cwd. i.e. project-directory/img/
          			dest: '/Project-Part-1-Start/images_src/images_optimized',
          			ext: '.jpg'
        		}
      		]
    	}
  	}
});

grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.registerTask('imagemin', ['imagemin']);
};