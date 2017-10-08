const Generator = require('yeoman-generator')
const fs = require('fs-extra')
const path = require('path')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)

    // This makes `appname` a required argument.
    // this.argument('appname', { type: String, required: true });
    // this.argument('othername', { type: String, required: true });

    // And you can then access it later; e.g.
    // this.log(this.options.appname);
    this.config.save()
    // this.log(this.options)
  }

  initializing() {
    // this.pkg = require('../package.json');
  }

  prompting() {
    return this.prompt([
      {
        type: 'confirm',
        name: 'npminstall',
        message: 'Do you wanna install automaticly',
        default: false, // Default to current folder name
      },
      {
        type: 'list',
        name: 'compiler',
        message: 'Choose a compiler',
        choices: ['ts', 'babel'],
        default: 0, // Default to current folder name
      },
    ])
    .then((res) => {
      this.npminstall = res.npminstall
      this.compiler = res.compiler
    })
  }

  writing() {
    async function write() {
      if (this.compiler === 'ts') {
        await fs.copy(path.join(this.sourceRoot(), 'ts.config'), this.destinationRoot())
        await this.fs.writeJSON(
          this.destinationPath('package.json'),
          Object.assign(
            this.fs.readJSON(path.join(process.cwd(), 'package.json')) || {},
            this.fs.readJSON(this.templatePath('_package.ts.json')),
          ),
        )
        this.log('file structure is built by the scaffold!')
      } else {
        await fs.copy(path.join(this.sourceRoot(), 'babel.config'), this.destinationRoot())
        await this.fs.writeJSON(
          this.destinationPath('package.json'),
          Object.assign(
            this.fs.readJSON(path.join(process.cwd(), 'package.json')) || {},
            this.fs.readJSON(this.templatePath('_package.babel.json')),
          ),
        )
        this.log('file structure is built by the scaffold!')
      }
    }
    write.call(this)
  }

  install() {
    const self = this
    if (this.npminstall) {
      this.installDependencies({
        bower: false,
        yarn: false,
        npm: true,
        callback() {
          self.log('Everything is ready.');
        },
      })
    }
  }

  end() {
    if (this.npminstall) {
      this.log('You can build your app!');
    } else {
      this.log('Please use npm install to init your project!')
    }
  }

}
