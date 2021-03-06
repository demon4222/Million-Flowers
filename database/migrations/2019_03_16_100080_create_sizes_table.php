<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateSizesTable.
 */
class CreateSizesTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('sizes', function(Blueprint $table) {
			$table->increments('id');

            $table->char('size',10);

            $table->integer('count');

            $table->unsignedInteger('height');

            $table->unsignedInteger('diameter');

		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('sizes');
	}
}
