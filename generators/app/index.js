'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var path = require('path');
var mkdirp = require('mkdirp');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the primo ' + chalk.red('generator-fullstack-vue') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'Please input project name (vue_project):',
        default: 'vue_project'
      },
      {
        type: 'input',
        name: 'projectDesc',
        message: 'Please input project description:'
      },
      {
        type: 'input',
        name: 'projectAuthor',
        message: 'Author (lix):',
        default: 'lix'
      },
      {
        type: 'list',
        name: 'projectLicense',
        message: 'Please choose license:',
        choices: ['MIT', 'ISC', 'Apache-2.0', 'AGPL-3.0']
      }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  defaults: function () {

    if (path.basename(this.destinationPath()) !== this.props.projectName) {
      this.log(
        'Your generator must be inside a folder named ' + this.props.projectName + '\n' +
        'I\'ll automatically create this folder.'
      );
      mkdirp(this.props.projectName);
      this.destinationRoot(this.destinationPath(this.props.projectName));
    }

  },


  writing: function () {

    var readmeTmpl = _.template(this.fs.read(this.templatePath('./README.md')));
    this.fs.write(this.destinationPath('README.md'), readmeTmpl({
      project_name: this.props.projectName,
      project_license: this.props.projectLicense,
      project_author: this.props.projectAuthor
    }));

    var readmeTmpl2 = _.template(this.fs.read(this.templatePath('./package.json')));
    this.fs.write(this.destinationPath('package.json'), readmeTmpl2({
      project_name: this.props.projectName,
      project_desc: this.props.projectDesc,
      project_author: this.props.projectAuthor
    }));


    this.fs.copy(
        this.templatePath('Gruntfile.js'),
        this.destinationPath('Gruntfile.js')
    );
    this.fs.copy(
        this.templatePath('index.html'),
        this.destinationPath('index.html')
    );
    this.fs.copy(
        this.templatePath('.babelrc'),
        this.destinationPath('.babelrc')
    );
    this.fs.copy(
        this.templatePath('.editorconfig'),
        this.destinationPath('.editorconfig')
    );
    this.fs.copy(
        this.templatePath('.eslintignore'),
        this.destinationPath('.eslintignore')
    );
    this.fs.copy(
        this.templatePath('.eslintrc.js'),
        this.destinationPath('.eslintrc.js')
    );
    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('dump.rdb'),
      this.destinationPath('dump.rdb')
    );

    this.fs.copy(
        this.templatePath('build/'),
        this.destinationPath('build/'),
        {
            globOptions: {
                dot:true
            }
        }
    );
    this.fs.copy(
        this.templatePath('config/'),
        this.destinationPath('config/'),
        {
            globOptions:{
              dot:true
            }
        }
    );
    this.fs.copy(
        this.templatePath('src/'),
        this.destinationPath('src/'),
        {
            globOptions:{
              dot:true
            }
        }
    );
    this.fs.copy(
        this.templatePath('server/'),
        this.destinationPath('server/'),
        {
            globOptions:{
              dot:true
            }
        }
    );
    this.fs.copy(
        this.templatePath('static/'),
        this.destinationPath('static/'),
        {
            globOptions:{
              dot:true
            }
        }
    );
    this.fs.copy(
        this.templatePath('test/'),
        this.destinationPath('test/'),
        {
            globOptions:{
              dot:true
            }
        }
    );
  },

  install: function () {
    this.installDependencies();
  }
});
