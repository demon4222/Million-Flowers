import $ from 'jquery';
import axios from 'axios'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

$(document).ready(function(){

})

class UploadAdapter {
    constructor( loader ) {
        this.loader = loader;
        this.reject = undefined;
    }


    upload() {
        return new Promise((resolve, reject) => {
            this.reject = reject;
            let formData = new FormData();

            this.loader.file.then((file) => {

                formData.append('image', file);

                axios.post('/admin/save-image', formData).then(({data}) => {
                    resolve({
                        default: data.uri
                    })
                })
            })


        });
    }

    abort() {
        this.reject();
    }
}

ClassicEditor
    .create( document.querySelector( '.js-ckeditor' ), {
        removePlugins: ['ImageCaption', 'ImageStyle', 'ImageTextAlternative', 'ImageToolbar'],
    })
    .then( editor => {
        window.editor = editor;

        editor.plugins.get( "FileRepository" ).createUploadAdapter = function( loader ) {
            return new UploadAdapter(loader);
        };


    } )
    .catch( err => {
        console.error( err.stack );
    } );
