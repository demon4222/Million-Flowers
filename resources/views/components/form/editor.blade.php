<?php
$_requestName = str_replace(['[]', '][', '[', ']', ' '], ['', '.', '.', '', '.'], $name);
?>

<div class="form-group {{ isset($class) ? $class : '' }}">
    @if (isset($label))
        <label for="{{ $name }}" class="control-label">
            {{ $label }}
            @if (isset($required))
                <span class="text-danger">*</span>
            @endif
        </label>
    @endif

    <textarea id="{{ $name }}"
              type="{{ isset($type) ? $type : 'text' }}"
              class="js-ckeditor form-control {{ $errors->has($_requestName) ? ' is-invalid' : '' }}"
              name="{{ $name }}"
              placeholder="{{ isset($placeholder) ? $placeholder : '' }}"
            {{ isset($attributes) ? $attributes : '' }}
        {{ isset($required) ? 'required' : '' }}
    >{{ old($_requestName) ?: (isset($value) ? trim($value) : '') }}</textarea>

    @if (isset($formText))
        <small class="form-text">{{$formText}}</small>
    @endif

    @if ($errors->has($_requestName))
        <span class="invalid-feedback">
            <strong>{{ $errors->first($_requestName) }}</strong>
        </span>
    @endif
</div>
