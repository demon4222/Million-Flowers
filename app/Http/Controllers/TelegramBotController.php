<?php

namespace App\Http\Controllers;

use Telegram\Bot\Laravel\Facades\Telegram;

class TelegramBotController extends Controller
{
    public static function updatedActivity()
    {
        $activity = Telegram::getUpdates();
        dd($activity);
    }
    public static function sendMessage()
    {
        Telegram::sendMessage([
            'chat_id' => env('TELEGRAM_CHANNEL_ID', '-1001429894185'),
            'parse_mode' => 'HTML',
            'text' => "Нове замовлення\nhttps://millionflowers.com.ua/admin/orders",
        ]);
    }
}
