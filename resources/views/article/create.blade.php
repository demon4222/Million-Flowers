@extends('admin')

@section('scripts')

@endsection

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-12">
                @component('components.element.card')
                    @slot('body')
                        <div class="row">
                            <form
                                role="form"
                                method="post"
                                action="{{ action('ArticleController@store') }}"
                                class="col-sm-12 col-md-8 offset-md-2"
                                enctype="multipart/form-data"
                            >
                                {{ csrf_field() }}

                                <div class="row">
                                    <div class="mb-4">
                                        @include('components.form.editor', [
                                            'label' => 'TEXT',
                                            'name' => "text",
                                            'type' => 'textarea'
                                        ])
                                    </div>
                                </div>
                                <button type="submit"
                                        class="btn btn-primary pull-right">Створити
                                </button>
                            </form>
                        </div>
                    @endslot
                @endcomponent
            </div>
        </div>
    </div>

@endsection
