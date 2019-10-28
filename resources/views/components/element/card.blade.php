<div class="card {{ isset($cardClass) ? $cardClass : '' }}">
    @if(isset($header))
    <div class="card-header {{ isset($headerClass) ? $headerClass : '' }}">
        {{$header}}
    </div>
    @endif

    @if(isset($body))
    <div class="card-body {{ isset($bodyClass) ? $bodyClass : '' }}">
        {{$body}}
    </div>
    @endif

    @if(isset($footer))
    <div class="card-footer {{ isset($footerClass) ? $footerClass : '' }}">
        {{$footer}}
    </div>
    @endif
</div>
